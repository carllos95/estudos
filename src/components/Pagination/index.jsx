import { PaginationItem } from './PaginationItem'

function generatePagesArray(from, to) {
  return [...Array(to - from)]
    .map((_, index) => index + from + 1)
    .filter(page => page > 0)
}

export function Pagination({ totalCount, currentPage, onPageChange }) {
  const registerPerPage = 20

  const maxPage = Math.ceil(totalCount / registerPerPage)

  const previousPage =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - 1, currentPage - 1)
      : []

  const nextPage =
    currentPage < maxPage
      ? generatePagesArray(currentPage, Math.min(currentPage + 1, maxPage))
      : []

  return (
    <div>
      <div className="flex justify-center mt-4">
        {currentPage > 1 + 1 && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > 1 + 1 && (
              <p className="w-8 h-8 flex items-center justify-center bg-transparent border-none">
                ...
              </p>
            )}
          </>
        )}

        {previousPage.length > 0 &&
          previousPage.map(page => (
            <PaginationItem
              onPageChange={onPageChange}
              number={page}
              key={page}
            />
          ))}

        <PaginationItem
          onPageChange={onPageChange}
          number={currentPage}
          isCurrent
        />

        {nextPage.length >= 1 &&
          maxPage > currentPage + 1 &&
          nextPage.map(page => (
            <PaginationItem
              onPageChange={onPageChange}
              number={page}
              key={page}
            />
          ))}

        {currentPage * 1 < maxPage && (
          <>
            {currentPage + 1 + 1 < maxPage && (
              <p className="w-5 h-5 flex items-center justify-center bg-transparent border-none">
                ...
              </p>
            )}
            <PaginationItem onPageChange={onPageChange} number={maxPage} />
          </>
        )}
      </div>
    </div>
  )
}
