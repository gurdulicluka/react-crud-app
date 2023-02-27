import { observer } from "mobx-react";
import React from "react";
import { IoFileTrayStacked } from "react-icons/io5";

import SortItem from "./SortItem";

const Sort = observer(({ params, setParams }) => {
  const handleSort = (event) => {
    setParams({ sort: event.target.value });
  };

  return (
    <div>
      <div className="mb-2 flex w-full items-center justify-between gap-1 border-b border-gray-500 text-lg font-bold">
        <span>Sort By</span>
        <IoFileTrayStacked />
      </div>
      <div className="flex flex-col gap-1">
        <SortItem
          handleSort={handleSort}
          sortValue={"vehicleMake"}
          params={params}
        >
          Manufacturer A-Z
        </SortItem>
        <SortItem
          handleSort={handleSort}
          sortValue={"category"}
          params={params}
        >
          Category A-Z
        </SortItem>
      </div>
    </div>
  );
});

export default Sort;
