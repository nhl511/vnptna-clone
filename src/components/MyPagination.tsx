import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Divide } from "lucide-react";
import { useRouter } from "next/navigation";

const MyPagination: React.FC<PaginationProps> = ({
  totalItems,
  limit,
  pageQuery,
  type,
}) => {
  const [currentPage, setCurrentPage] = useState(pageQuery);

  const router = useRouter();
  const totalPages = Math.ceil(totalItems / limit); // Calculate total pages based on total items and limit
  const pages = [];

  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, currentPage + 2);

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  useEffect(() => {
    if (currentPage) {
      if (type === 1) router.push("/news/promotion-news?page=" + currentPage);
      else if (type === 2) router.push("/news/activity?page=" + currentPage);
      else router.push("/news/business-news?page=" + currentPage);
    }
  }, [currentPage]);

  return (
    <div className="w-full flex items-center space-x-2 text-xs">
      <button
        className={`p-1 rounded ${
          currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white"
        }`}
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft size={16} />
      </button>

      {startPage > 1 && (
        <>
          <button
            className={`px-3 py-1 rounded ${
              1 === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setCurrentPage(1)}
          >
            1
          </button>
          {startPage > 2 && <span className="px-3 py-1">...</span>}
        </>
      )}

      {pages.map((page) => (
        <button
          key={page}
          className={`px-3 py-1 rounded ${
            page === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => {
            setCurrentPage(page);
          }}
        >
          {page}
        </button>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="px-3 py-1">...</span>}
          <button
            className={`px-3 py-1 rounded ${
              totalPages === currentPage
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setCurrentPage(totalPages)}
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        className={`p-1 rounded ${
          currentPage === totalPages ? "bg-gray-300" : "bg-blue-500 text-white"
        }`}
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
};

export default MyPagination;
