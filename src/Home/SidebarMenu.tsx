// SidebarMenu.tsx
import { Home, Users, Flame, BookOpen, User, FileText, PenTool, Sparkles, BookMarked, Plus } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const SidebarMenu = () => {
  const location = useLocation();
  
  // Helper function to check if a route is active
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className='flex flex-col gap-6'>
      <h3 className="common-font text-2xl font-bold mb-4">BookieChat</h3>
      
      <nav>
        <ul className="flex flex-col gap-2">
          <li>
            <Link 
              to="/home"
              className={`flex items-center gap-4 px-4 py-3 rounded-full cursor-pointer font-medium text-lg ${
                isActive('/home') ? 'bg-blue-50 text-blue-500' : 'hover:bg-gray-100'
              }`}
            >
              <Home size={24} />
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/community"
              className={`flex items-center gap-4 px-4 py-3 rounded-full cursor-pointer font-medium text-lg ${
                isActive('/community') ? 'bg-blue-50 text-blue-500' : 'hover:bg-gray-100'
              }`}
            >
              <Users size={24} />
              Community
            </Link>
          </li>
          <li>
            <Link 
              to="/hot-topics"
              className={`flex items-center gap-4 px-4 py-3 rounded-full cursor-pointer font-medium text-lg ${
                isActive('/hot-topics') ? 'bg-blue-50 text-blue-500' : 'hover:bg-gray-100'
              }`}
            >
              <Flame size={24} />
              Hot Topics
            </Link>
          </li>
          <li>
            <Link 
              to="/my-library"
              className={`flex items-center gap-4 px-4 py-3 rounded-full cursor-pointer font-medium text-lg ${
                isActive('/my-library') ? 'bg-blue-50 text-blue-500' : 'hover:bg-gray-100'
              }`}
            >
              <BookOpen size={24} />
              My Library
            </Link>
          </li>
          <li>
            <Link 
              to="/profile"
              className={`flex items-center gap-4 px-4 py-3 rounded-full cursor-pointer font-medium text-lg ${
                isActive('/profile') ? 'bg-blue-50 text-blue-500' : 'hover:bg-gray-100'
              }`}
            >
              <User size={24} />
              Profile
            </Link>
          </li>
          <li>
            <Link 
              to="/short-stories"
              className={`flex items-center gap-4 px-4 py-3 rounded-full cursor-pointer font-medium text-lg ${
                isActive('/short-stories') ? 'bg-blue-50 text-blue-500' : 'hover:bg-gray-100'
              }`}
            >
              <FileText size={24} />
              Short Stories
            </Link>
          </li>
          <li>
            <Link 
              to="/authors"
              className={`flex items-center gap-4 px-4 py-3 rounded-full cursor-pointer font-medium text-lg ${
                isActive('/authors') ? 'bg-blue-50 text-blue-500' : 'hover:bg-gray-100'
              }`}
            >
              <PenTool size={24} />
              Authors
            </Link>
          </li>
          <li>
            <Link 
              to="/new-releases"
              className={`flex items-center gap-4 px-4 py-3 rounded-full cursor-pointer font-medium text-lg ${
                isActive('/new-releases') ? 'bg-blue-50 text-blue-500' : 'hover:bg-gray-100'
              }`}
            >
              <Sparkles size={24} />
              New Releases
            </Link>
          </li>
          <li>
            <Link 
              to="/reading"
              className={`flex items-center gap-4 px-4 py-3 rounded-full cursor-pointer font-medium text-lg ${
                isActive('/reading') ? 'bg-blue-50 text-blue-500' : 'hover:bg-gray-100'
              }`}
            >
              <BookMarked size={24} />
              Reading
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mt-4">
        <button className="w-full cta-button hover:bg-blue-700 py-3 rounded-full font-bold text-lg flex items-center justify-center gap-2">
          <Plus size={24} />
          Post
        </button>
      </div>
    </div>
  )
}

export default SidebarMenu