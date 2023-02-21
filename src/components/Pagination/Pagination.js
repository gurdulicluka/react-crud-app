import { observer } from "mobx-react";
import React, { useState } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

import store from "../../store/vehiclesStore";
import PaginationItem from "./PaginationItem";
import RecordsPerPageMenu from "./RecordsPerPageMenu";

const range = (start, end) => {
  return [...Array(end).keys()].map((el) => el + start);
};

const Pagination = observer(() => {
  const [currentPage, setCurrentPage] = useState(1);
  const pagesCount = Math.ceil(store.allRecords / store.params["rpp"]);
  const pages = range(1, pagesCount);

  const handlePrevNext = (direction) => {
    if (direction === "previous" && currentPage > 1) {
      store.setParams({ page: +store.params.page - 1 });
      setCurrentPage((currentPage) => currentPage - 1);
    } else if (direction === "next" && currentPage < pages.length) {
      store.setParams({ page: +store.params.page + 1 });
      setCurrentPage((currentPage) => currentPage + 1);
    }
  };

  return (
    <div className="container relative mx-auto mt-10 flex items-center justify-center">
      <div className="flex items-center gap-4">
        <button
          className={`rounded-full p-1  ${
            currentPage === 1 ? "invisible" : "hover:bg-gray-300"
          }`}
          onClick={() => handlePrevNext("previous")}
        >
          <IoArrowBack className="h-[24px] w-[24px]" />
        </button>
        <ul className="flex w-fit gap-2">
          {pages.map((page) => {
            return (
              <PaginationItem
                key={page}
                page={page}
                currentPage={currentPage}
                onPageChange={(page) => setCurrentPage(page)}
              />
            );
          })}
        </ul>
        <button
          onClick={() => handlePrevNext("next")}
          className={`rounded-full p-1  ${
            currentPage === pages.length ? "invisible" : "hover:bg-gray-300"
          }`}
        >
          <IoArrowForward className="h-[24px] w-[24px]" />
        </button>
      </div>
      <RecordsPerPageMenu setCurrentPage={setCurrentPage} />
    </div>
  );
});

export default Pagination;
