// pages/topics/AIandFutureTech.tsx
const AIandFutureTech = () => {
  const posts = [
    {
      id: 1,
      user: 'TechReader42',
      avatar: 'TR',
      time: '2h ago',
      content: 'Just finished "The Alignment Problem" by Brian Christian. Mind-blowing insights into AI safety and machine learning ethics. Highly recommend! 🤖📚',
      likes: 245,
      comments: 32,
      color: 'bg-blue-500'
    },
    {
      id: 2,
      user: 'FutureFanatic',
      avatar: 'FF',
      time: '4h ago',
      content: 'Looking for book recommendations on AI consciousness. Already read "Life 3.0" by Max Tegmark. What should I read next?',
      likes: 187,
      comments: 28,
      color: 'bg-purple-500'
    },
    {
      id: 3,
      user: 'SciFiSarah',
      avatar: 'SS',
      time: '6h ago',
      content: 'Hot take: Isaac Asimov\'s Robot series predicted AI ethics debates 70 years ago. The Three Laws of Robotics are more relevant than ever! #ClassicSciFi',
      likes: 412,
      comments: 56,
      color: 'bg-green-500'
    },
    {
      id: 4,
      user: 'DataDriven',
      avatar: 'DD',
      time: '8h ago',
      content: '"Weapons of Math Destruction" by Cathy O\'Neil should be required reading for anyone working in tech. Eye-opening look at algorithmic bias.',
      likes: 328,
      comments: 41,
      color: 'bg-teal-500'
    }
  ]

  return (
    <div className="divide-y divide-gray-200">
      {posts.map((post) => (
        <div key={post.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
          <div className="flex gap-3">
            {/* Avatar */}
            <div className={`${post.color} text-white rounded-full w-12 h-12 flex items-center justify-center font-bold shrink-0`}>
              {post.avatar}
            </div>
            
            {/* Post Content */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-gray-900">{post.user}</span>
                <span className="text-gray-500">·</span>
                <span className="text-sm text-gray-500">{post.time}</span>
              </div>
              
              <p className="text-gray-800 mb-3 leading-relaxed">{post.content}</p>
              
              {/* Engagement */}
              <div className="flex items-center gap-6 text-gray-500 text-sm">
                <button className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {post.likes}
                </button>
                <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {post.comments}
                </button>
                <button className="flex items-center gap-2 hover:text-green-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AIandFutureTech