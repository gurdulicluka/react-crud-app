import axios from "axios";

const baseUrl =
  "https://api.baasic.com/beta/callyse-226-201/resources/vehicles/";

export const vehicleService = {
  get: async (urlParams) => {
    const response = await axios.get(baseUrl + "?" + urlParams);
    return response;
  },

  post: async (model) => {
    const response = await axios.post(baseUrl, model);
    return response;
  },
  put: async (id, model) => {
    const response = await axios.put(baseUrl + id, model);
    return response;
  },
  delete: async (id) => {
    const response = await axios.delete(baseUrl + id);
    return response;
  },
};
