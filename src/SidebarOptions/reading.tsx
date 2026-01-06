// pages/Reading.tsx
import { BookMarked, Clock, Calendar } from 'lucide-react'

const Reading = () => {
  const currentlyReading = [
    {
      id: 1,
      title: 'The Midnight Library',
      author: 'Matt Haig',
      cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=300&fit=crop',
      progress: 75,
      pagesRead: 225,
      totalPages: 300,
      timeLeft: '2h 15min left',
      startDate: 'Jan 1, 2026',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'Project Hail Mary',
      author: 'Andy Weir',
      cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=200&h=300&fit=crop',
      progress: 45,
      pagesRead: 180,
      totalPages: 400,
      timeLeft: '5h 30min left',
      startDate: 'Dec 28, 2025',
      color: 'bg-orange-500'
    },
    {
      id: 3,
      title: 'The Song of Achilles',
      author: 'Madeline Miller',
      cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&h=300&fit=crop',
      progress: 30,
      pagesRead: 105,
      totalPages: 350,
      timeLeft: '7h 45min left',
      startDate: 'Dec 30, 2025',
      color: 'bg-purple-500'
    },
    {
      id: 4,
      title: 'Dune',
      author: 'Frank Herbert',
      cover: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=200&h=300&fit=crop',
      progress: 60,
      pagesRead: 312,
      totalPages: 520,
      timeLeft: '6h 20min left',
      startDate: 'Dec 20, 2025',
      color: 'bg-amber-600'
    },
    {
      id: 5,
      title: 'The Invisible Life of Addie LaRue',
      author: 'V.E. Schwab',
      cover: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=200&h=300&fit=crop',
      progress: 85,
      pagesRead: 357,
      totalPages: 420,
      timeLeft: '1h 45min left',
      startDate: 'Dec 15, 2025',
      color: 'bg-teal-500'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 backdrop-blur-sm bg-opacity-95 z-10 px-6 py-4">
        <div className="flex items-center gap-3 mb-2">
          <BookMarked size={28} className="text-green-500" />
          <h1 className="text-2xl font-bold">Currently Reading</h1>
        </div>
        <p className="text-gray-600">Track your reading progress</p>
      </div>

      {/* Reading List */}
      <div className="p-6 space-y-4">
        {currentlyReading.map((book) => (
          <div key={book.id} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow">
            <div className="flex gap-4">
              {/* Book Cover */}
              <div className="relative shrink-0">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-28 h-40 object-cover rounded-lg shadow-md"
                />
                <div className={`absolute -top-2 -right-2 ${book.color} text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm shadow-lg`}>
                  {book.progress}%
                </div>
              </div>

              {/* Book Details */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{book.title}</h3>
                <p className="text-gray-600 mb-3">by {book.author}</p>

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span>{book.pagesRead} of {book.totalPages} pages</span>
                    <span className="font-medium">{book.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-3 rounded-full transition-all ${book.color}`}
                      style={{ width: `${book.progress}%` }}
                    />
                  </div>
                </div>

                {/* Reading Stats */}
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    {book.timeLeft}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    Started {book.startDate}
                  </div>
                </div>

                {/* Action Button */}
                <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors">
                  Continue Reading
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reading Stats Summary */}
      <div className="px-6 pb-6">
        <div className="bg-linear-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-4">This Week's Progress</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">847</div>
              <div className="text-sm text-gray-600">Pages Read</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">12h</div>
              <div className="text-sm text-gray-600">Reading Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">5</div>
              <div className="text-sm text-gray-600">Books Active</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reading