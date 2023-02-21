import React, { useState } from "react";

import ListEditForm from "./ListEditForm";
import ListItemButton from "./ListItemButton";

const ListItem = ({ vehicle }) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  return (
    <li>
      <div className="group/item flex justify-between border-b bg-white px-6 py-3 transition duration-150">
        {showEditForm ? (
          <ListEditForm
            {...vehicle}
            showEditForm={showEditForm}
            setShowEditForm={setShowEditForm}
            setShowOptions={setShowOptions}
          />
        ) : (
          <div className="flex w-[85%] items-center justify-between">
            <p className="flex-1">{vehicle.vehicleMake}</p>
            <p className="flex-1">{vehicle.vehicleModel}</p>
            <p className="flex-1">{vehicle.category}</p>
          </div>
        )}
        <ListItemButton
          vehicleId={vehicle.id}
          showOptions={showOptions}
          showEditForm={showEditForm}
          setShowOptions={setShowOptions}
          setShowEditForm={setShowEditForm}
        />
      </div>
    </li>
  );
};

export default ListItem;
