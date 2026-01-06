// pages/Authors.tsx
import { UserPlus, UserCheck, Search } from 'lucide-react'
import { useState } from 'react'

const Authors = () => {
  const [followingFilter, setFollowingFilter] = useState<'all' | 'following'>('all')

  const authors = [
    {
      id: 1,
      name: 'Margaret Atwood',
      username: '@margaretatwood',
      avatar: 'MA',
      bio: 'Author of The Handmaid\'s Tale, Oryx and Crake, and many more.',
      followers: '2.3M',
      books: 50,
      isFollowing: true,
      color: 'bg-red-500'
    },
    {
      id: 2,
      name: 'Neil Gaiman',
      username: '@neilhimself',
      avatar: 'NG',
      bio: 'Author. Doesn\'t like people who are mean to kittens.',
      followers: '3.1M',
      books: 42,
      isFollowing: true,
      color: 'bg-purple-500'
    },
    {
      id: 3,
      name: 'Chimamanda Ngozi Adichie',
      username: '@chimamanda',
      avatar: 'CN',
      bio: 'Novelist, feminist. Author of Americanah and Half of a Yellow Sun.',
      followers: '1.8M',
      books: 15,
      isFollowing: false,
      color: 'bg-green-500'
    },
    {
      id: 4,
      name: 'Haruki Murakami',
      username: '@harukimurakami',
      avatar: 'HM',
      bio: 'Japanese novelist. Running enthusiast. Jazz lover.',
      followers: '2.7M',
      books: 38,
      isFollowing: true,
      color: 'bg-blue-500'
    },
    {
      id: 5,
      name: 'Stephen King',
      username: '@stephenking',
      avatar: 'SK',
      bio: 'Author of horror, suspense, and the occasional tweet.',
      followers: '7.2M',
      books: 64,
      isFollowing: false,
      color: 'bg-gray-700'
    },
    {
      id: 6,
      name: 'Roxane Gay',
      username: '@roxanegay',
      avatar: 'RG',
      bio: 'Writer. Editor. Person who occasionally does other things.',
      followers: '982K',
      books: 12,
      isFollowing: true,
      color: 'bg-pink-500'
    },
    {
      id: 7,
      name: 'Brandon Sanderson',
      username: '@brandonsanderson',
      avatar: 'BS',
      bio: 'Fantasy author. Creator of intricate magic systems.',
      followers: '1.5M',
      books: 45,
      isFollowing: false,
      color: 'bg-indigo-500'
    },
    {
      id: 8,
      name: 'Toni Morrison',
      username: '@tonimorrison',
      avatar: 'TM',
      bio: 'Nobel Prize-winning author. Beloved.',
      followers: '1.2M',
      books: 11,
      isFollowing: true,
      color: 'bg-amber-600'
    }
  ]

  const [authorsState, setAuthorsState] = useState(authors)

  const toggleFollow = (id: number) => {
    setAuthorsState(authorsState.map(author => 
      author.id === id ? { ...author, isFollowing: !author.isFollowing } : author
    ))
  }

  const filteredAuthors = followingFilter === 'following' 
    ? authorsState.filter(a => a.isFollowing) 
    : authorsState

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 backdrop-blur-sm bg-opacity-95 z-10 px-6 py-4">
        <h1 className="text-2xl font-bold mb-4">Authors</h1>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search authors..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFollowingFilter('all')}
            className={`px-4 py-2 rounded-full font-medium whitespace-nowrap ${
              followingFilter === 'all'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Authors
          </button>
          <button
            onClick={() => setFollowingFilter('following')}
            className={`px-4 py-2 rounded-full font-medium whitespace-nowrap ${
              followingFilter === 'following'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Following
          </button>
        </div>
      </div>

      {/* Authors List */}
      <div className="divide-y divide-gray-200">
        {filteredAuthors.map((author) => (
          <div key={author.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div className={`${author.color} text-white rounded-full w-14 h-14 flex items-center justify-center font-bold text-lg shrink-0`}>
                {author.avatar}
              </div>

              {/* Author Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-1">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 hover:underline cursor-pointer">
                      {author.name}
                    </h3>
                    <p className="text-sm text-gray-600">{author.username}</p>
                  </div>
                  <button
                    onClick={() => toggleFollow(author.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-colors ml-4 ${
                      author.isFollowing
                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                  >
                    {author.isFollowing ? (
                      <>
                        <UserCheck size={18} />
                        Following
                      </>
                    ) : (
                      <>
                        <UserPlus size={18} />
                        Follow
                      </>
                    )}
                  </button>
                </div>
                <p className="text-gray-700 mb-2">{author.bio}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span><strong className="text-gray-900">{author.followers}</strong> followers</span>
                  <span><strong className="text-gray-900">{author.books}</strong> books</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Authors