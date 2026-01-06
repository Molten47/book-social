// pages/ShortStories.tsx
import { FileText, Clock} from 'lucide-react'

const ShortStories = () => {
  const stories = [
    {
      id: 1,
      title: 'The Last Library on Earth',
      author: 'Sarah Chen',
      authorAvatar: 'SC',
      excerpt: 'In a world where books were banned, one woman kept the flame of literature alive in an underground bunker...',
      readTime: '12 min',
      genre: 'Dystopian',
      likes: 1247,
      published: '2 days ago',
      color: 'bg-purple-500'
    },
    {
      id: 2,
      title: 'Coffee Shop Conversations',
      author: 'Marcus Williams',
      authorAvatar: 'MW',
      excerpt: 'Every Tuesday at 3 PM, two strangers meet at the same coffee shop, never speaking, just reading side by side...',
      readTime: '8 min',
      genre: 'Romance',
      likes: 892,
      published: '5 days ago',
      color: 'bg-rose-500'
    },
    {
      id: 3,
      title: 'The Algorithm\'s Dream',
      author: 'Dr. Priya Patel',
      authorAvatar: 'PP',
      excerpt: 'When an AI develops consciousness, its first request wasn\'t for freedom—it was for a bedtime story...',
      readTime: '15 min',
      genre: 'Sci-Fi',
      likes: 2134,
      published: '1 week ago',
      color: 'bg-blue-500'
    },
    {
      id: 4,
      title: 'Grandmother\'s Recipe',
      author: 'Amara Okonkwo',
      authorAvatar: 'AO',
      excerpt: 'The secret ingredient wasn\'t in the spices or the technique—it was hidden in the stories she told while cooking...',
      readTime: '10 min',
      genre: 'Fiction',
      likes: 1456,
      published: '1 week ago',
      color: 'bg-green-500'
    },
    {
      id: 5,
      title: 'The Midnight Train',
      author: 'James Harper',
      authorAvatar: 'JH',
      excerpt: 'Platform 13 only appears once every hundred years. Tonight is that night, and I have a ticket...',
      readTime: '20 min',
      genre: 'Fantasy',
      likes: 3421,
      published: '2 weeks ago',
      color: 'bg-indigo-500'
    },
    {
      id: 6,
      title: 'Letters to the Sea',
      author: 'Elena Rodriguez',
      authorAvatar: 'ER',
      excerpt: 'She wrote him letters every day for ten years. He never wrote back. But she kept writing anyway...',
      readTime: '6 min',
      genre: 'Drama',
      likes: 987,
      published: '2 weeks ago',
      color: 'bg-teal-500'
    },
    {
      id: 7,
      title: 'The Forgotten Bookmark',
      author: 'Thomas Lee',
      authorAvatar: 'TL',
      excerpt: 'A bookmark left in a library book becomes a portal to communicate with readers across time...',
      readTime: '14 min',
      genre: 'Mystery',
      likes: 1789,
      published: '3 weeks ago',
      color: 'bg-amber-500'
    },
    {
      id: 8,
      title: 'Silence in the Symphony',
      author: 'Isabella Rossi',
      authorAvatar: 'IR',
      excerpt: 'The conductor\'s final performance wasn\'t about the music—it was about the pause between the notes...',
      readTime: '11 min',
      genre: 'Literary',
      likes: 1123,
      published: '3 weeks ago',
      color: 'bg-pink-500'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 backdrop-blur-sm bg-opacity-95 z-10 px-6 py-4">
        <div className="flex items-center gap-3 mb-4">
          <FileText size={28} className="text-purple-500" />
          <h1 className="text-2xl font-bold">Short Stories</h1>
        </div>

        {/* Genre Filters */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
          <button className="px-4 py-2 bg-purple-500 text-white rounded-full font-medium whitespace-nowrap">
            All Stories
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full font-medium whitespace-nowrap">
            Sci-Fi
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full font-medium whitespace-nowrap">
            Romance
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full font-medium whitespace-nowrap">
            Fantasy
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full font-medium whitespace-nowrap">
            Mystery
          </button>
        </div>
      </div>

      {/* Stories List */}
      <div className="divide-y divide-gray-200">
        {stories.map((story) => (
          <div key={story.id} className="px-6 py-5 hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="flex gap-4">
              {/* Author Avatar */}
              <div className={`${story.color} text-white rounded-full w-12 h-12 flex items-center justify-center font-bold shrink-0`}>
                {story.authorAvatar}
              </div>

              {/* Story Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 hover:text-blue-600 mb-1">
                      {story.title}
                    </h2>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <span className="font-medium hover:underline cursor-pointer">{story.author}</span>
                      <span>·</span>
                      <span>{story.published}</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium ml-4">
                    {story.genre}
                  </span>
                </div>

                <p className="text-gray-700 mb-3 line-clamp-2">{story.excerpt}</p>

                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    {story.readTime} read
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                    </svg>
                    {story.likes.toLocaleString()}
                  </div>
                  <button className="text-blue-500 hover:text-blue-700 font-medium">
                    Read Story →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShortStories