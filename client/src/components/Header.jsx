import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <nav className="bg-[#0A0A0A] border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to='/' className="flex items-center group">
              <span className="text-2xl font-bold text-white tracking-tight font-['SF Pro Display']">
                prep<span className="text-neutral-500">mate</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {currentUser && (
                <>
                  <Link to='/' className="text-neutral-300 hover:text-white px-3 py-2 text-base font-medium transition-colors duration-200">
                    Home
                  </Link>
                  <Link to='/practice' className="text-neutral-300 hover:text-white px-3 py-2 text-base font-medium transition-colors duration-200">
                    Practice
                  </Link>
                </>
              )}
              <Link to='/about' className="text-neutral-300 hover:text-white px-3 py-2 text-base font-medium transition-colors duration-200">
                About
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {currentUser ? (
              <div className="flex items-center gap-3">
                <Link to="/practice" className="bg-white hover:bg-neutral-100 text-black px-5 py-2.5 rounded-lg text-base font-medium transition-colors duration-200">
                  Start Coding
                </Link>
                <Link to="/profile">
                  <img 
                    src={currentUser.profilePicture} 
                    alt="profile" 
                    className="h-10 w-10 rounded-full object-cover hover:opacity-80 transition-opacity duration-200"
                  />
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/sign-in" className="text-white bg-neutral-900 hover:bg-neutral-800 px-5 py-2.5 rounded-lg text-base font-medium transition-colors duration-200 border border-neutral-800">
                  Sign In
                </Link>
                <Link to='/sign-up' className="bg-white text-black px-5 py-2.5 rounded-lg text-base font-medium hover:bg-neutral-100 transition-colors duration-200">
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
