import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#1A1A1A] border border-neutral-800 rounded-xl p-8">
          <h1 className='text-3xl md:text-4xl font-semibold text-center mb-8 text-white'>Sign In</h1>
          <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
            <input
              type='email'
              placeholder='Email'
              id='email'
              className='bg-neutral-800 border border-neutral-700 text-white rounded-lg p-3 focus:border-neutral-600 focus:outline-none transition-colors duration-200'
              onChange={handleChange}
            />
            <input
              type='password'
              placeholder='Password'
              id='password'
              className='bg-neutral-800 border border-neutral-700 text-white rounded-lg p-3 focus:border-neutral-600 focus:outline-none transition-colors duration-200'
              onChange={handleChange}
            />
            <button
              disabled={loading}
              className='bg-white text-black p-3 rounded-lg font-medium hover:bg-neutral-100 disabled:opacity-80 transition-colors duration-200'
            >
              {loading ? 'Loading...' : 'Sign In'}
            </button>
            <OAuth />
          </form>
          <div className='flex justify-center gap-2 mt-8 pt-6 border-t border-neutral-800'>
            <p className='text-neutral-300'>Don't have an account?</p>
            <Link to='/sign-up'>
              <span className='text-white hover:text-neutral-300 transition-colors duration-200'>Sign up</span>
            </Link>
          </div>
          {error && (
            <p className='text-red-400 text-center mt-6'>
              {error.message || 'Something went wrong!'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
