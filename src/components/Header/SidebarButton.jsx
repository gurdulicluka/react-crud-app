import { IoOptions } from "react-icons/io5";

const SidebarButton = ({ setShowSidebar, showSidebar }) => {
  return (
    <div className="relative">
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="h-[44px] w-[44px] rounded-full p-[6px] transition duration-150 ease-in-out hover:bg-gray-200"
      >
        <IoOptions className="h-auto w-full" />
      </button>
    </div>
  );
};

export default SidebarButton;
