//import React from 'react'

const TrendsMenu = () => {
  return (
    <div className='flex flex-col gap-4'>
      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search BookieChat"
          className="w-full px-4 py-3 pr-10 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
        />
        <svg
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Trends Section */}
      <div className="bg-gray-50 rounded-2xl overflow-hidden">
        <h2 className="px-4 py-3 font-bold text-xl">Trending Books</h2>
        
        {[...Array(5)].map((_, i) => (
          <div key={i} className="px-4 py-3 hover:bg-gray-100 cursor-pointer transition-colors">
            <div className="text-xs text-gray-500 mb-1">Trending in Books</div>
            <div className="font-bold">#{`TrendingBook${i + 1}`}</div>
            <div className="text-xs text-gray-500 mt-1">{Math.floor(Math.random() * 50)}K posts</div>
          </div>
        ))}
        
        <button className="w-full px-4 py-3 text-blue-500 hover:bg-gray-100 text-left">
          Show more
        </button>
      </div>

      {/* Hot Topics Section */}
      <div className="bg-gray-50 rounded-2xl overflow-hidden">
        <h2 className="px-4 py-3 font-bold text-xl">Hot Topics</h2>
        
        {['Fantasy Novels', 'BookTok Recommendations', 'Author Interviews', 'Reading Challenge 2026'].map((topic, i) => (
          <div key={i} className="px-4 py-3 hover:bg-gray-100 cursor-pointer transition-colors">
            <div className="font-medium">{topic}</div>
            <div className="text-xs text-gray-500 mt-1">{Math.floor(Math.random() * 100)}K talking about this</div>
          </div>
        ))}
        
        <button className="w-full px-4 py-3 text-blue-500 hover:bg-gray-100 text-left">
          Show more
        </button>
      </div>
    </div>
  )
}

export default TrendsMenu