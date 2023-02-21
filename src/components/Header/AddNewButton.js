import { IoAddCircle } from "react-icons/io5";

const AddNewButton = ({ showForm, setShowForm }) => {
  return (
    <button
      className={`${
        showForm ? "bg-gray-200" : "hover:bg-gray-200"
      } flex items-center gap-1 rounded-full pl-2 transition duration-200 `}
      title="Add new"
      onClick={() => setShowForm(!showForm)}
    >
      <div className="text-sm font-semibold">
        {showForm ? "Cancel" : "Add new"}
      </div>
      <div className="h-[44px] w-[44px] rounded-full">
        <IoAddCircle
          className={`${
            showForm ? "rotate-45 fill-red-500" : "fill-blue-500"
          } inline-block h-full w-full transition`}
        />
      </div>
    </button>
  );
};

export default AddNewButton;
