import { observer } from "mobx-react";
import React from "react";

import store from "../../common/vehiclesStore";

const FilterItem = observer(({ filterName, filterType }) => {
  return (
    <label htmlFor={filterName} className="custom-checkbox cursor-pointer">
      <input
        className="hidden"
        type="checkbox"
        id={filterName}
        name={filterType}
        value={filterName}
        onChange={(event) => store.applyFilters(event.target.value, filterType)}
        checked={store.appliedFilters[filterType].includes(filterName)}
      />
      <div className="rounded-md py-1 pl-4 hover:bg-gray-200">{filterName}</div>
    </label>
  );
});

export default FilterItem;
