import React, { useEffect, useRef } from "react";

import store from "../../common/vehiclesStore";

const ListEditForm = ({
  id,
  vehicleMake,
  vehicleModel,
  category,
  setShowEditForm,
  setShowOptions,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.select();
  }, []);

  const formData = useRef({
    vehicleMake: vehicleMake,
    vehicleModel: vehicleModel,
    category: category,
  });

  const handleChange = (event) => {
    formData.current[event.target.name] = event.target.value;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    store.updateVehicle(id, formData.current);
    setShowEditForm(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex w-[85%] justify-between "
    >
      <div className="flex-1 placeholder:text-xs">
        <input
          ref={inputRef}
          className="custom-text-input"
          defaultValue={vehicleMake}
          type="text"
          onChange={handleChange}
          name="vehicleMake"
          placeholder="Enter manufacturer"
          required
        />
      </div>
      <div className="flex-1 placeholder:text-xs">
        <input
          className="custom-text-input"
          defaultValue={vehicleModel}
          type="text"
          onChange={handleChange}
          name="vehicleModel"
          placeholder="Enter model"
          required
        />
      </div>
      <div className="flex-1 placeholder:text-xs">
        <input
          className="custom-text-input"
          defaultValue={category}
          type="text"
          onChange={handleChange}
          name="category"
          placeholder="Enter category"
          required
        />
      </div>
      <button
        onClick={() => setShowOptions(false)}
        type="submit"
        className="absolute right-0 h-[28px] rounded-full bg-blue-500 px-[9px] text-xs text-white"
      >
        Save
      </button>
    </form>
  );
};

export default ListEditForm;
