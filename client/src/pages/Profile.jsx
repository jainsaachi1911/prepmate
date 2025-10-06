import { useSelector } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOut,
} from '../redux/user/userSlice';

export default function Profile() {
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const { currentUser, loading, error } = useSelector((state) => state.user);
  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);
  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, profilePicture: downloadURL })
        );
      }
    );
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };

  const handleDeleteAccount = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };

  const handleSignOut = async () => {
    try {
      await fetch('/api/auth/signout');
      dispatch(signOut())
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#1A1A1A] border border-neutral-800 rounded-xl p-8">
          <h1 className='text-3xl md:text-4xl font-semibold text-center mb-8 text-white'>Profile</h1>
          <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
            <input
              type='file'
              ref={fileRef}
              hidden
              accept='image/*'
              onChange={(e) => setImage(e.target.files[0])}
            />
            {/* 
          firebase storage rules:  
          allow read;
          allow write: if
          request.resource.size < 2 * 1024 * 1024 &&
          request.resource.contentType.matches('image/.*') */}
            <div className="flex flex-col items-center">
              <img
                src={formData.profilePicture || currentUser.profilePicture}
                alt='profile'
                className='h-24 w-24 cursor-pointer rounded-full object-cover hover:opacity-80 transition-opacity duration-200'
                onClick={() => fileRef.current.click()}
              />
              <p className='text-sm text-center mt-2'>
                {imageError ? (
                  <span className='text-red-400'>
                    Error uploading image (file size must be less than 2 MB)
                  </span>
                ) : imagePercent > 0 && imagePercent < 100 ? (
                  <span className='text-neutral-300'>{`Uploading: ${imagePercent} %`}</span>
                ) : imagePercent === 100 ? (
                  <span className='text-green-400'>Image uploaded successfully</span>
                ) : (
                  <span className='text-neutral-400'>Click to change profile picture</span>
                )}
              </p>
            </div>
            <input
              defaultValue={currentUser.username}
              type='text'
              id='username'
              placeholder='Username'
              className='bg-neutral-800 border border-neutral-700 text-white rounded-lg p-3 focus:border-neutral-600 focus:outline-none transition-colors duration-200'
              onChange={handleChange}
            />
            <input
              defaultValue={currentUser.email}
              type='email'
              id='email'
              placeholder='Email'
              className='bg-neutral-800 border border-neutral-700 text-white rounded-lg p-3 focus:border-neutral-600 focus:outline-none transition-colors duration-200'
              onChange={handleChange}
            />
            <input
              type='password'
              id='password'
              placeholder='Password'
              className='bg-neutral-800 border border-neutral-700 text-white rounded-lg p-3 focus:border-neutral-600 focus:outline-none transition-colors duration-200'
              onChange={handleChange}
            />
            <button className='bg-white text-black p-3 rounded-lg font-medium hover:bg-neutral-100 disabled:opacity-80 transition-colors duration-200'>
              {loading ? 'Loading...' : 'Update Profile'}
            </button>
          </form>
          <div className='flex justify-between mt-8 pt-6 border-t border-neutral-800'>
            <span
              onClick={handleDeleteAccount}
              className='text-red-400 cursor-pointer hover:text-red-300 transition-colors duration-200'
            >
              Delete Account
            </span>
            <span onClick={handleSignOut} className='text-red-400 cursor-pointer hover:text-red-300 transition-colors duration-200'>
              Sign out
            </span>
          </div>
          <div className="mt-6">
            <p className='text-red-400 text-center'>{error && 'Something went wrong!'}</p>
            <p className='text-green-400 text-center'>
              {updateSuccess && 'User is updated successfully!'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
