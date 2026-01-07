// Navbar/Navbar.tsx
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === `/feed${path}`;
  
  return (
    <div className="flex flex-col w-full">
      {/* Quick navigation tabs */}
      <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
        <Link
          to="/feed"
          className={`px-3 md:px-4 py-2 md:py-3 font-medium whitespace-nowrap text-sm md:text-base ${
            isActive('') 
              ? 'text-blue-500 border-b-2 border-blue-500' 
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Feed
        </Link>
        <Link
          to="/feed/trending"
          className={`px-3 md:px-4 py-2 md:py-3 font-medium whitespace-nowrap text-sm md:text-base ${
            isActive('/trending') 
              ? 'text-blue-500 border-b-2 border-blue-500' 
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Trending
        </Link>
        <Link
          to="/feed/community"
          className={`px-3 md:px-4 py-2 md:py-3 font-medium whitespace-nowrap text-sm md:text-base ${
            isActive('/community') 
              ? 'text-blue-500 border-b-2 border-blue-500' 
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Community
        </Link>
        <Link
          to="/feed/following"
          className={`px-3 md:px-4 py-2 md:py-3 font-medium whitespace-nowrap text-sm md:text-base ${
            isActive('/following') 
              ? 'text-blue-500 border-b-2 border-blue-500' 
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Following
        </Link>
        <Link
          to="/feed/book-clubs"
          className={`px-3 md:px-4 py-2 md:py-3 font-medium whitespace-nowrap text-sm md:text-base ${
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