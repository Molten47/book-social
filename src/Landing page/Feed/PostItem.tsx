import { useState } from 'react'
import { Heart, MessageCircle, Repeat2, BarChart3 } from 'lucide-react'

const PostItem = ({ index }: {index:number}) => {
  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState(34)
  const [isRetweeted, setIsRetweeted] = useState(false)
  const [retweets, setRetweets] = useState(5)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes(isLiked ? likes - 1 : likes + 1)
  }

  const handleRetweet = () => {
    setIsRetweeted(!isRetweeted)
    setRetweets(isRetweeted ? retweets - 1 : retweets + 1)
  }

  return (
    <div className="px-4 py-4 hover:bg-gray-50 cursor-pointer transition-colors">
      <div className="flex gap-3">
        <div className="w-12 h-12 bg-gray-300 rounded-full shrink-0"></div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold">Book Lover {index + 1}</span>
            <span className="text-gray-500">@reader{index + 1}</span>
            <span className="text-gray-500">· 2h</span>
          </div>
          <p className="mb-2">
            Just finished reading an amazing chapter! This book keeps getting better. 
            Can't wait to see what happens next. #BookLovers #Reading
          </p>
          
          {/* Action Buttons */}
          <div className="flex gap-12 text-gray-500 mt-3">
            {/* Comment Button */}
            <button className="flex items-center gap-1 hover:text-blue-500 transition-colors group">
              <div className="p-2 rounded-full group-hover:bg-blue-50 transition-colors">
                <MessageCircle size={18} />
              </div>
              <span className="text-sm">12</span>
            </button>

            {/* Retweet Button */}
            <button 
              onClick={handleRetweet}
              className={`flex items-center gap-1 transition-colors group ${
                isRetweeted ? 'text-green-500' : 'hover:text-green-500'
              }`}
            >
              <div className={`p-2 rounded-full transition-colors ${
                isRetweeted ? 'bg-green-50' : 'group-hover:bg-green-50'
              }`}>
                <Repeat2 size={18} />
              </div>
              <span className="text-sm">{retweets}</span>
            </button>

            {/* Like Button */}
            <button 
              onClick={handleLike}
              className={`flex items-center gap-1 transition-colors group ${
                isLiked ? 'text-red-500' : 'hover:text-red-500'
              }`}
            >
              <div className={`p-2 rounded-full transition-colors ${
                isLiked ? 'bg-red-50' : 'group-hover:bg-red-50'
              }`}>
                <Heart 
                  size={18} 
                  fill={isLiked ? 'currentColor' : 'none'}
                  className="transition-all"
                />
              </div>
              <span className="text-sm">{likes}</span>
            </button>

            {/* Stats Button */}
            <button className="flex items-center gap-1 hover:text-blue-500 transition-colors group">
              <div className="p-2 rounded-full group-hover:bg-blue-50 transition-colors">
                <BarChart3 size={18} />
              </div>
              <span className="text-sm">123</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostItem