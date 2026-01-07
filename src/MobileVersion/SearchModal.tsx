// Home/SearchModal.tsx
import { X } from 'lucide-react'
import TrendsMenu from '../Home/TrendsMenu'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  if (!isOpen) return null

  return (
    <div className="lg:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <h2 className="text-xl font-bold">Search & Trends</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <X size={24} />
        </button>
      </div>

      {/* Trends Content */}
      <div className="p-4">
        <TrendsMenu />
      </div>
    </div>
  )
}

export default SearchModal