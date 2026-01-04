//import React from 'react'

const SidebarMenu = () => {
  return (
    <div className='flex flex-col gap-6'>
      {/* Logo */}
      <h3 className="common-font text-2xl font-bold mb-4">BookieChat</h3>
      
      {/* Navigation Menu */}
      <nav>
        <ul className="flex flex-col gap-3">
          <li className="px-4 py-3 rounded-full hover:bg-gray-100 cursor-pointer font-medium text-lg">
            Home
          </li>
          <li className="px-4 py-3 rounded-full hover:bg-gray-100 cursor-pointer font-medium text-lg">
            Community
          </li>
          <li className="px-4 py-3 rounded-full hover:bg-gray-100 cursor-pointer font-medium text-lg">
            Hot Topics
          </li>
          <li className="px-4 py-3 rounded-full hover:bg-gray-100 cursor-pointer font-medium text-lg">
            My Library
          </li>
          <li className="px-4 py-3 rounded-full hover:bg-gray-100 cursor-pointer font-medium text-lg">
            Profile
          </li>
          <li className="px-4 py-3 rounded-full hover:bg-gray-100 cursor-pointer font-medium text-lg">
            Short Stories
          </li>
          <li className="px-4 py-3 rounded-full hover:bg-gray-100 cursor-pointer font-medium text-lg">
            Authors
          </li>
          <li className="px-4 py-3 rounded-full hover:bg-gray-100 cursor-pointer font-medium text-lg">
            New Releases
          </li>
          <li className="px-4 py-3 rounded-full hover:bg-gray-100 cursor-pointer font-medium text-lg">
            Reading
          </li>
        </ul>
      </nav>

      {/* Post Button */}
      <div className="mt-4">
        <button className="w-full cta-button hover:bg-blue-700 py-3 rounded-full font-bold text-lg">
          Post
        </button>
      </div>
    </div>
  )
}

export default SidebarMenu