import { observer } from "mobx-react-lite";

const SortItem = observer(({ children, handleSort, params, sortValue }) => {
  return (
    <label>
      <input
        className="sr-only"
        type="radio"
        name="sort"
        value={sortValue}
        checked={params.sort === sortValue}
        onChange={handleSort}
      />
      <p
        className={`${
          params.sort === sortValue
            ? "pointer-events-none bg-blue-500 text-white"
            : "cursor-pointer bg-gray-200 hover:bg-gray-300"
        } rounded-md py-1 pl-4 transition duration-150`}
      >
        {children}
      </p>
    </label>
  );
});

export default SortItem;
