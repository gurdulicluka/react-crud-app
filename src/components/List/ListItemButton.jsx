import {
  IoClose,
  IoEllipsisHorizontalSharp,
  IoPencil,
  IoTrashOutline,
} from "react-icons/io5";

import store from "../../common/vehiclesStore";

const ListEditButton = ({
  showEditForm,
  setShowEditForm,
  vehicleId,
  showOptions,
  setShowOptions,
}) => {
  return (
    <div
      className={` ${
        showOptions ? "visible" : "invisible"
      } relative flex items-center gap-1 group-hover/item:visible`}
    >
      <button
        type="button"
        onClick={() => {
          setShowOptions(!showOptions);
          setShowEditForm(false);
        }}
        className={`z-20 h-[28px] w-[28px] rounded-full hover:bg-gray-400/40 ${
          showOptions && "bg-gray-400/80"
        }`}
      >
        {showOptions ? (
          <IoClose className="mx-auto" />
        ) : (
          <IoEllipsisHorizontalSharp className="mx-auto" />
        )}
      </button>
      {showOptions && (
        <div className="absolute right-0 z-10 flex h-full items-center rounded-full bg-gray-400/40 pr-[28px] ">
          <button
            onClick={() => setShowEditForm(!showEditForm)}
            type="button"
            className={`h-[28px] w-[28px] rounded-full  ${
              !showEditForm ? "hover:bg-gray-400/40" : "bg-primary"
            }`}
          >
            <IoPencil
              className={`mx-auto ${!showEditForm ? "" : "stroke-white"}`}
            />
          </button>
          <button
            onClick={() => store.deleteVehicle(vehicleId)}
            type="button"
            className="group/deleteBtn h-[28px] w-[28px] rounded-full hover:bg-red-500"
          >
            <IoTrashOutline className="mx-auto group-hover/deleteBtn:stroke-white" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ListEditButton;
