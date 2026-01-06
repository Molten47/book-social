// Navbar.tsx
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  // Helper function to check if a route is active
  const isActive = (path: string) => location.pathname === `/feed${path}`;
  
  return (
    <div className="flex flex-col w-full">
      {/* Quick navigation tabs - book-focused */}
      <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
        <Link
          to="/feed"
          className={`px-4 py-3 font-medium whitespace-nowrap ${
            isActive('') 
              ? 'text-blue-500 border-b-2 border-blue-500' 
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Feed
        </Link>
        <Link
          to="/feed/trending"
          className={`px-4 py-3 font-medium whitespace-nowrap ${
            isActive('/trending') 
              ? 'text-blue-500 border-b-2 border-blue-500' 
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Trending
        </Link>
        <Link
          to="/feed/community"
          className={`px-4 py-3 font-medium whitespace-nowrap ${
            isActive('/community') 
              ? 'text-blue-500 border-b-2 border-blue-500' 
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Community
        </Link>
        <Link
          to="/feed/following"
          className={`px-4 py-3 font-medium whitespace-nowrap ${
            isActive('/following') 
              ? 'text-blue-500 border-b-2 border-blue-500' 
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Following
        </Link>
        <Link
          to="/feed/book-clubs"
          className={`px-4 py-3 font-medium whitespace-nowrap ${
            isActive('/book-clubs') 
              ? 'text-blue-500 border-b-2 border-blue-500' 
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Book Clubs
        </Link>
      </div>
    </div>
  );
};

export default Navbar;