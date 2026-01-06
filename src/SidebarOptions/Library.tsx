// pages/MyLibrary.tsx
import { BookOpen, Grid, List } from 'lucide-react'
import { useState } from 'react'

const MyLibrary = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const books = [
    {
      id: 1,
      title: 'The Midnight Library',
      author: 'Matt Haig',
      cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop',
      progress: 75
    },
    {
      id: 2,
      title: 'Atomic Habits',
      author: 'James Clear',
      cover: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop',
      progress: 100
    },
    {
      id: 3,
      title: 'The Song of Achilles',
      author: 'Madeline Miller',
      cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop',
      progress: 45
    },
    {
      id: 4,
      title: 'Project Hail Mary',
      author: 'Andy Weir',
      cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop',
      progress: 30
    },
    {
      id: 5,
      title: 'Dune',
      author: 'Frank Herbert',
      cover: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=300&h=400&fit=crop',
      progress: 60
    },
    {
      id: 6,
      title: 'The Seven Husbands of Evelyn Hugo',
      author: 'Taylor Jenkins Reid',
      cover: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=300&h=400&fit=crop',
      progress: 90
    },
    {
      id: 7,
      title: 'Educated',
      author: 'Tara Westover',
      cover: 'https://images.unsplash.com/photo-1491841651911-c44c30c34548?w=300&h=400&fit=crop',
      progress: 20
    },
    {
      id: 8,
      title: 'The Invisible Life of Addie LaRue',
      author: 'V.E. Schwab',
      cover: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop',
      progress: 55
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 backdrop-blur-sm bg-opacity-95 z-10 px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <BookOpen size={28} className="text-blue-500" />
            <h1 className="text-2xl font-bold">My Library</h1>
          </div>
          
          {/* View Toggle */}
          <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-full transition-colors ${
                viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
              }`}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-full transition-colors ${
                viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
              }`}
            >
              <List size={20} />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-full font-medium whitespace-nowrap">
            All Books
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full font-medium whitespace-nowrap">
            Currently Reading
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full font-medium whitespace-nowrap">
            Completed
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full font-medium whitespace-nowrap">
            Want to Read
          </button>
        </div>
      </div>

      {/* Books Grid/List */}
      <div className="p-6">
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book) => (
              <div key={book.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-64 object-cover"
                  />
                  {book.progress < 100 && (
                    <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-3">
                      <div className="w-full bg-gray-300 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full transition-all"
                          style={{ width: `${book.progress}%` }}
                        />
                      </div>
                      <p className="text-white text-xs mt-1">{book.progress}% complete</p>
                    </div>
                  )}
                  {book.progress === 100 && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      ✓ Finished
                    </div>
                  )}
                </div>
                <h3 className="mt-3 font-semibold text-gray-900 line-clamp-1">{book.title}</h3>
                <p className="text-sm text-gray-600">{book.author}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {books.map((book) => (
              <div key={book.id} className="flex gap-4 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-20 h-28 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{book.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{book.author}</p>
                  {book.progress < 100 ? (
                    <div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${book.progress}%` }}
                        />
                      </div>
                      <p className="text-xs text-gray-600">{book.progress}% complete</p>
                    </div>
                  ) : (
                    <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                      ✓ Completed
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default MyLibrary