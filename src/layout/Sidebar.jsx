import { IoClose } from "react-icons/io5";

import store from "../common/vehiclesStore";
import Filter from "../components/Sidebar/Filter";
import Sort from "../components/Sidebar/Sort";

const Sidebar = ({ setShowSidebar, showSidebar }) => {
  const { setParams, params } = store;

  return (
    <div
      className={`${
        showSidebar ? "left-0" : "-left-full"
      } fixed top-0 z-50 h-full w-full max-w-xs bg-white px-5 shadow-2xl`}
    >
      <button
        className="absolute right-4 top-2 rounded-full"
        onClick={() => setShowSidebar(false)}
      >
        <IoClose className="h-[28px] w-[28px]" />
      </button>
      <div className="mt-[50px]">
        <Sort params={params} setParams={setParams} />
        <Filter />
      </div>
    </div>
  );
};

export default Sidebar;
