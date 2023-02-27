import { observer } from "mobx-react-lite";
import React from "react";
import { IoFunnel } from "react-icons/io5";

import store from "../../common/vehiclesStore";
import FilterItem from "./FilterItem";

const Filter = observer(() => {
  const handleSubmit = (event) => {
    event.preventDefault();
    store.buildSearchQuery();
  };

  return (
    <div className="mt-5">
      <div className="mb-2 flex w-full items-center justify-between gap-1 border-b border-gray-500 text-lg font-bold">
        <span>Filter</span>
        <IoFunnel className="inline" />
      </div>
      <form onSubmit={handleSubmit}>
        <legend className="mb-1 w-full bg-gray-200 pl-1 font-bold">
          Manufacturer
        </legend>
        <fieldset className="mb-3 flex flex-col gap-1">
          {store.allFilters.vehicleMake.map((filter, index) => {
            return (
              <FilterItem
                key={index}
                filterName={filter}
                filterType={"vehicleMake"}
              />
            );
          })}
        </fieldset>
        <legend className="mb-1 w-full bg-gray-200 pl-1 font-bold">
          Category
        </legend>
        <fieldset className="flex h-[240px] flex-col gap-1 overflow-y-auto border-b pr-1">
          {store.allFilters.category.map((filter, index) => {
            return (
              <FilterItem
                key={index}
                filterName={filter}
                filterType={"category"}
              />
            );
          })}
        </fieldset>
        <div className="mt-10 flex justify-around">
          <button
            onClick={() => store.clearActiveFilters()}
            type="button"
            className="text-lg hover:underline"
          >
            Reset
          </button>
          <button
            type="submit"
            className="rounded-md bg-primary px-5 py-2 text-lg text-white"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
});

export default Filter;
