//import React from 'react'
import TextareaAutosize from "react-textarea-autosize"
import Navbar from "../Navbar/Navbar"

const Feed = () => {
  return (
    <div className="min-h-screen ">
      {/* Feed Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 backdrop-blur-sm bg-opacity-95 z-10">
        <Navbar/>
      </div>

      {/* Post Composer */}
      <div className="border-b border-gray-200 px-4 py-4">
        <TextareaAutosize 
          placeholder="What book are you reading?" 
          className="w-full resize-none outline-none text-lg"
          minRows={3}
          maxRows={10}
        />
        <div className="flex justify-end mt-2">
          <button className="cta-button px-6 py-2 rounded-full font-bold">
            Post
          </button>
        </div>
      </div>

      {/* Feed Posts - Dummy content */}
      <div className="divide-y divide-gray-200">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="px-4 py-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex gap-3">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold">Book Lover {i + 1}</span>
                  <span className="text-gray-500">@reader{i + 1}</span>
                  <span className="text-gray-500">· 2h</span>
                </div>
                <p className="mb-2">
                  Just finished reading an amazing chapter! This book keeps getting better. 
                  Can't wait to see what happens next. #BookLovers #Reading
                </p>
                <div className="flex gap-12 text-gray-500 mt-3">
                  <button className="hover:text-blue-500">💬 12</button>
                  <button className="hover:text-green-500">🔁 5</button>
                  <button className="hover:text-red-500">❤️ 34</button>
                  <button className="hover:text-blue-500">📊 123</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Feed