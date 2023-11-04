import { useState, useEffect } from "react";

const usePagination = <
  T extends { id: number; featured?: boolean; category?: string }
>(
  data: T[],
  itemsPerPage: number,
  filterCondition: (item: T) => boolean
) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState<T[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    // Filter the data
    const filteredData = data.filter(filterCondition);

    // Find the featured post only in the filtered data
    const featuredPost =
      currentPage === 1 ? filteredData.find((item) => item.featured) : null;

    // Calculate the starting index of the items on the current page
    const indexOfFirstItem = (currentPage - 1) * itemsPerPage;

    // Calculate the total number of pages based on the filtered data
    const newTotalPages = Math.ceil(
      (filteredData.length - (featuredPost ? 1 : 0)) / itemsPerPage
    );

    // Adjust the paginated data based on the filtered data
    let newPaginatedData = filteredData
      .filter((item) => !item.featured)
      .slice(indexOfFirstItem, indexOfFirstItem + itemsPerPage);

    // If there's a featured post on the first page, insert it at the specified index
    if (featuredPost && currentPage === 1) {
      newPaginatedData.splice(4, 0, featuredPost);
    }

    setPaginatedData(newPaginatedData);
    setTotalPages(newTotalPages);
  }, [currentPage, itemsPerPage, data, filterCondition]);

  return { currentPage, setCurrentPage, totalPages, paginatedData };
};

export default usePagination;
