// PostItem.tsx
const PostItem = ({ index }: { index: number }) => {
  return (
    <div className="px-3 md:px-4 py-3 md:py-4 hover:bg-gray-50 transition-colors">
      <div className="flex gap-2 md:gap-3">
        {/* Avatar */}
        <div className="bg-blue-500 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-bold shrink-0 text-sm md:text-base">
          U{index}
        </div>
        
        {/* Post Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold text-gray-900 text-sm md:text-base">User {index}</span>
            <span className="text-gray-500 text-xs md:text-sm">@user{index}</span>
            <span className="text-gray-500 text-xs md:text-sm">· 2h</span>
          </div>
          
          <p className="text-gray-800 mb-2 text-sm md:text-base wrap-break-words">
            Just finished reading an amazing book! The character development was incredible. 
            Highly recommend to anyone looking for a great read. 📚✨
          </p>
          
          {/* Engagement buttons */}
          <div className="flex items-center gap-4 md:gap-6 text-gray-500 text-xs md:text-sm">
            <button className="flex items-center gap-1 md:gap-2 hover:text-blue-500 transition-colors">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="hidden sm:inline">{12 + index}</span>
            </button>
            <button className="flex items-center gap-1 md:gap-2 hover:text-green-500 transition-colors">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="hidden sm:inline">{5 + index}</span>
            </button>
            <button className="flex items-center gap-1 md:gap-2 hover:text-red-500 transition-colors">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="hidden sm:inline">{34 + index}</span>
            </button>
            <button className="flex items-center gap-1 md:gap-2 hover:text-blue-500 transition-colors ml-auto">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;