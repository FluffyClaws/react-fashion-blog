import { useState, useEffect } from "react";

const usePagination = <T extends { id: number; featured?: boolean }>(
  data: T[],
  itemsPerPage: number
) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState<T[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const featuredPost =
      currentPage === 1 ? data.find((item) => item.featured) : null;

    const indexOfFirstItem = (currentPage - 1) * itemsPerPage;

    const totalItemsToDisplay = itemsPerPage;

    let newPaginatedData = data
      .filter((item) => !item.featured)
      .slice(indexOfFirstItem, indexOfFirstItem + totalItemsToDisplay);

    if (featuredPost && currentPage === 1) {
      newPaginatedData.splice(4, 0, featuredPost);
    }

    setPaginatedData(newPaginatedData);

    const newTotalPages = Math.ceil(
      (data.length - (featuredPost ? 1 : 0)) / itemsPerPage
    );

    setTotalPages(newTotalPages);
  }, [currentPage, itemsPerPage, data]);

  return { currentPage, setCurrentPage, totalPages, paginatedData };
};

export default usePagination;
