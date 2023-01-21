export function PaginationItem({ isCurrent = false, number, onPageChange }) {
  if (isCurrent) {
    return (
      <button
        className="w-8 h-8 flex items-center justify-center bg-gray-300 border-2 border-gray-400 mx-2"
        disabled
      >
        {number}
      </button>
    )
  }

  return (
    <button
      className="w-8 h-8 flex items-center justify-center bg-transparent border-2 border-gray-400 mx-2"
      onClick={() => onPageChange(number)}
    >
      {number}
    </button>
  )
}
