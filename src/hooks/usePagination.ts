import { useState, useEffect } from "react";
import { sortPostsByDate } from "../utils/postUtils";

const usePagination = <
  T extends { id: number; featured?: boolean; category?: string; date: string }
>(
  data: T[],
  itemsPerPage: number,
  filterCondition: (item: T) => boolean
) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState<T[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const sortedData = sortPostsByDate<T>(data);

    const filteredData = sortedData.filter(filterCondition);

    const featuredPost =
      currentPage === 1 ? filteredData.find((item) => item.featured) : null;

    const indexOfFirstItem = (currentPage - 1) * itemsPerPage;

    const newTotalPages = Math.ceil(
      (filteredData.length - (featuredPost ? 1 : 0)) / itemsPerPage
    );

    let newPaginatedData = filteredData
      .filter((item) => !item.featured)
      .slice(indexOfFirstItem, indexOfFirstItem + itemsPerPage);

    if (featuredPost && currentPage === 1) {
      newPaginatedData.splice(4, 0, featuredPost);
    }

    setPaginatedData(newPaginatedData);
    setTotalPages(newTotalPages);
  }, [currentPage, itemsPerPage, data, filterCondition]);

  return { currentPage, setCurrentPage, totalPages, paginatedData };
};

export default usePagination;
