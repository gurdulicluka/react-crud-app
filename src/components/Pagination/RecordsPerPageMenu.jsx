import { observer } from "mobx-react";

import store from "../../store/vehiclesStore";

const RecordsPerPageMenu = observer(({ setCurrentPage }) => {
  return (
    <div className="absolute right-0 bottom-0 flex overflow-hidden rounded-md">
      <button
        onClick={() => {
          store.setParams({ rpp: 10, page: 1 });
          setCurrentPage(1);
        }}
        className={`${
          store.params["rpp"] === 10
            ? "pointer-events-none bg-blue-700"
            : " bg-blue-400 hover:bg-blue-700"
        } flex-1 border-r border-white  px-3 py-[2px] text-sm text-white`}
      >
        10
      </button>
      <button
        onClick={() => {
          store.setParams({ rpp: 25, page: 1 });
          setCurrentPage(1);
        }}
        className={`${
          store.params["rpp"] === 25
            ? "pointer-events-none bg-blue-700"
            : " bg-blue-400 hover:bg-blue-700"
        } flex-1 border-r border-white px-3 py-[2px] text-sm text-white`}
      >
        25
      </button>
      <button
        onClick={() => {
          store.setParams({ rpp: store.allRecords, page: 1 });
          setCurrentPage(1);
        }}
        className={`${
          store.params["rpp"] === store.allRecords
            ? "pointer-events-none bg-blue-700"
            : " bg-blue-400 hover:bg-blue-700"
        } flex-1 px-3 py-[2px] text-sm text-white`}
      >
        All
      </button>
    </div>
  );
});

export default RecordsPerPageMenu;
