
import { Home, BookMarked, Search, BookOpen, Users } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

interface BottomNavProps {
  onSearchClick: () => void
}

const BottomNav = ({ onSearchClick }: BottomNavProps) => {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-30 safe-area-inset-bottom">
      <div className="flex items-center justify-around py-2 px-2">
        <Link
          to="/home"
          className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
            isActive('/home') ? 'text-blue-500' : 'text-gray-600'
          }`}
        >
          <Home size={24} fill={isActive('/home') ? 'currentColor' : 'none'} />
          <span className="text-xs font-medium">Home</span>
        </Link>

        <Link
          to="/reading"
          className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
            isActive('/reading') ? 'text-blue-500' : 'text-gray-600'
          }`}
        >
          <BookMarked size={24} fill={isActive('/reading') ? 'currentColor' : 'none'} />
          <span className="text-xs font-medium">Reading</span>
        </Link>

        <button
          onClick={onSearchClick}
          className="flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors text-gray-600 active:text-blue-500"
        >
          <Search size={24} />
          <span className="text-xs font-medium">Search</span>
        </button>

        <Link
          to="/my-library"
          className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
            isActive('/my-library') ? 'text-blue-500' : 'text-gray-600'
          }`}
        >
          <BookOpen size={24} fill={isActive('/my-library') ? 'currentColor' : 'none'} />
          <span className="text-xs font-medium">Library</span>
        </Link>

        <Link
          to="/community"
          className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
            isActive('/community') ? 'text-blue-500' : 'text-gray-600'
          }`}
        >
          <Users size={24} fill={isActive('/community') ? 'currentColor' : 'none'} />
          <span className="text-xs font-medium">Community</span>
        </Link>
      </div>
    </div>
  )
}

export default BottomNav