import React, { useRef } from "react";

import store from "../../store/vehiclesStore";

const PostDataForm = ({ setShowForm }) => {
  const formData = useRef({});

  const handleChange = (event) => {
    formData.current[event.target.name] = event.target.value;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    store.postData(formData.current);
    setShowForm(false);
  };

  return (
    <div
      onClick={() => setShowForm(false)}
      className="fixed top-0 z-30 flex h-full w-screen items-start justify-center bg-black/60"
    >
      <form
        className="mt-[10%] flex w-[300px] animate-fadeInDown flex-col items-center gap-6 rounded-md bg-white p-10"
        onSubmit={handleSubmit}
        onClick={(event) => event.stopPropagation()}
      >
        <input
          className="custom-text-input w-full"
          type="text"
          name="vehicleMake"
          onChange={handleChange}
          placeholder="Enter manufacturer"
          required
        />
        <input
          className="custom-text-input w-full"
          type="text"
          name="vehicleModel"
          onChange={handleChange}
          placeholder="Enter model"
          required
        />
        <input
          className="custom-text-input w-full"
          type="text"
          name="category"
          onChange={handleChange}
          placeholder="Enter category"
          required
        />
        <div className="self-end">
          <button
            onClick={() => setShowForm(false)}
            className="mr-6 text-sm hover:underline"
          >
            Cancel
          </button>
          <button
            className="rounded-md bg-blue-500 px-4 py-1 text-white"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostDataForm;
