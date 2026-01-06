// pages/NewReleases.tsx
import { Sparkles, Heart, MessageCircle, Share2, BookmarkPlus } from 'lucide-react'

const NewReleases = () => {
  const releases = [
    {
      id: 1,
      book: {
        title: 'The Quantum Garden',
        author: 'Derek Künsken',
        cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=200&h=300&fit=crop',
        releaseDate: 'Released Today'
      },
      post: {
        user: 'BookNewsDaily',
        avatar: 'BN',
        time: '2h ago',
        content: 'Just dropped! The highly anticipated sequel to The Quantum Magician is finally here. Early reviews are calling it "mind-bending" and "impossible to put down." 🚀📚',
        likes: 1543,
        comments: 234,
        shares: 89
      },
      color: 'bg-blue-500'
    },
    {
      id: 2,
      book: {
        title: 'The Paper Palace',
        author: 'Miranda Cowley Heller',
        cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=300&fit=crop',
        releaseDate: 'Released 2 days ago'
      },
      post: {
        user: 'LiteraryReviews',
        avatar: 'LR',
        time: '5h ago',
        content: 'This debut novel is stunning. A story about love, family, and the choices that define us. Perfect for fans of literary fiction. Already a #1 bestseller! 💫',
        likes: 2134,
        comments: 412,
        shares: 156
      },
      color: 'bg-rose-500'
    },
    {
      id: 3,
      book: {
        title: 'Tomorrow, and Tomorrow, and Tomorrow',
        author: 'Gabrielle Zevin',
        cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&h=300&fit=crop',
        releaseDate: 'Released 1 week ago'
      },
      post: {
        user: 'IndieBookstore',
        avatar: 'IB',
        time: '1d ago',
        content: 'A love letter to video games, friendship, and creativity. This book captured my heart from page one. Gabrielle Zevin has created something truly special. 🎮❤️',
        likes: 3421,
        comments: 567,
        shares: 234
      },
      color: 'bg-purple-500'
    },
    {
      id: 4,
      book: {
        title: 'Holly',
        author: 'Stephen King',
        cover: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=200&h=300&fit=crop',
        releaseDate: 'Released 1 week ago'
      },
      post: {
        user: 'HorrorFanatic',
        avatar: 'HF',
        time: '1d ago',
        content: 'King returns with another chilling tale featuring Holly Gibney. Perfect blend of crime thriller and supernatural horror. Sleep with the lights on! 👻',
        likes: 2876,
        comments: 389,
        shares: 178
      },
      color: 'bg-gray-700'
    },
    {
      id: 5,
      book: {
        title: 'The Fragile Threads of Power',
        author: 'V.E. Schwab',
        cover: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=200&h=300&fit=crop',
        releaseDate: 'Released 2 weeks ago'
      },
      post: {
        user: 'FantasyWorldNews',
        avatar: 'FW',
        time: '2d ago',
        content: 'V.E. Schwab returns to the world of Red, Grey, White, and Black London! Fans of the Shades of Magic series, this is what we\'ve been waiting for! 🎩✨',
        likes: 4123,
        comments: 678,
        shares: 291
      },
      color: 'bg-indigo-500'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 backdrop-blur-sm bg-opacity-95 z-10 px-6 py-4">
        <div className="flex items-center gap-3">
          <Sparkles size={28} className="text-yellow-500" />
          <h1 className="text-2xl font-bold">New Releases</h1>
        </div>
      </div>

      {/* Releases Feed */}
      <div className="divide-y divide-gray-200">
        {releases.map((release) => (
          <div key={release.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
            <div className="flex gap-3">
              {/* Avatar */}
              <div className={`${release.color} text-white rounded-full w-12 h-12 flex items-center justify-center font-bold shrink-0`}>
                {release.post.avatar}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-gray-900">{release.post.user}</span>
                  <span className="text-gray-500">·</span>
                  <span className="text-sm text-gray-500">{release.post.time}</span>
                </div>

                <p className="text-gray-800 mb-3">{release.post.content}</p>

                {/* Book Card */}
                <div className="flex gap-4 p-4 border border-gray-200 rounded-xl mb-3 hover:shadow-md transition-shadow cursor-pointer">
                  <img
                    src={release.book.cover}
                    alt={release.book.title}
                    className="w-24 h-36 object-cover rounded-lg shadow-md"
                  />
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium mb-2">
                      {release.book.releaseDate}
                    </span>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">{release.book.title}</h3>
                    <p className="text-gray-600 mb-3">by {release.book.author}</p>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 text-sm">
                      Pre-order Now
                    </button>
                  </div>
                </div>

                {/* Engagement Buttons */}
                <div className="flex items-center gap-6 text-gray-500">
                  <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
                    <Heart size={20} />
                    <span className="text-sm">{release.post.likes.toLocaleString()}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                    <MessageCircle size={20} />
                    <span className="text-sm">{release.post.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-green-500 transition-colors">
                    <Share2 size={20} />
                    <span className="text-sm">{release.post.shares}</span>
                  </button>
                  <button className="ml-auto hover:text-blue-500 transition-colors">
                    <BookmarkPlus size={20} />
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

export default NewReleases