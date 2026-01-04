//import React from 'react'

const Navbar = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Quick navigation tabs - book-focused */}
      <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
        <button className="px-4 py-3 font-medium text-blue-500 border-b-2 border-blue-500 whitespace-nowrap">
          Feed
        </button>
        <button className="px-4 py-3 font-medium text-gray-600 hover:bg-gray-100 whitespace-nowrap">
          Trending
        </button>
        <button className="px-4 py-3 font-medium text-gray-600 hover:bg-gray-100 whitespace-nowrap">
          Community
        </button>
        <button className="px-4 py-3 font-medium text-gray-600 hover:bg-gray-100 whitespace-nowrap">
          Following
        </button>
        <button className="px-4 py-3 font-medium text-gray-600 hover:bg-gray-100 whitespace-nowrap">
          Book Clubs
        </button>
      </div>
    </div>
  )
}

export default Navbar