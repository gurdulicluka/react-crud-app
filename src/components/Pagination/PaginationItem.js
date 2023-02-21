import { observer } from "mobx-react";

import store from "../../store/vehiclesStore";

const PaginationItem = observer(({ page, currentPage, onPageChange }) => {
  return (
    <li
      className={`${
        page === currentPage
          ? "pointer-events-none bg-blue-500 text-white"
          : "hover:bg-gray-300"
      } flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-md border border-transparent`}
      onClick={() => {
        onPageChange(page);
        store.setParams({ page: page });
      }}
    >
      <span>{page}</span>
    </li>
  );
});

export default PaginationItem;
