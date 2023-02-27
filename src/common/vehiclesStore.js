import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
  toJS,
} from "mobx";

import { vehicleService } from "./vehiclesService";

class VehiclesStore {
  constructor() {
    makeObservable(this, {
      vehicles: observable,
      allFilters: observable,
      allRecords: observable,
      appliedFilters: observable,
      params: observable,
      getVehicles: action,
      createVehicle: action,
      updateVehicle: action,
      deleteVehicle: action,
      queryString: computed,
      buildSearchQuery: action,
      getFilterData: action,
      setParams: action,
      applyFilters: action,
      clearActiveFilters: action,
    });
  }

  vehicles = [];
  allRecords = 0;
  allFilters = {
    vehicleMake: [],
    category: [],
  };

  appliedFilters = {
    vehicleMake: [],
    category: [],
  };

  params = {
    page: 1,
    rpp: 10,
    sort: "vehicleMake",
    searchQuery: "",
  };

  getVehicles = async () => {
    try {
      const response = await vehicleService.get(this.queryString);
      runInAction(() => {
        this.vehicles = response.data.item;
        this.allRecords = response.data.totalRecords;
        !this.allFilters.vehicleMake.length && this.getFilterData();
      });
    } catch (error) {
      window.alert(error);
    }
  };

  createVehicle = async (model) => {
    try {
      await vehicleService.post(model);
      runInAction(() => {
        this.getVehicles();
      });
    } catch (error) {
      console.error(error);
    }
  };

  updateVehicle = async (id, model) => {
    try {
      await vehicleService.put(id, model);
      runInAction(() => {
        this.getVehicles();
      });
    } catch (error) {
      console.error(error);
    }
  };

  deleteVehicle = async (id) => {
    try {
      await vehicleService.delete(id);
      runInAction(() => {
        this.vehicles = this.vehicles.filter((item) => item.id !== id);
        this.allRecords -= 1;
      });
    } catch (error) {
      console.error(error);
    }
  };

  get queryString() {
    const searchParams = new URLSearchParams();
    const paramObject = toJS(this.params);

    for (const key in paramObject) {
      if (paramObject.hasOwnProperty(key) && paramObject[key] !== "") {
        searchParams.set(key, paramObject[key]);
      }
    }

    return searchParams.toString();
  }

  setParams = (obj) => {
    runInAction(() => {
      Object.assign(this.params, obj);
      this.getVehicles();
    });
  };

  getFilterData = async () => {
    try {
      const response = await vehicleService.get(`rpp=${this.allRecords}`);
      runInAction(() => {
        this.allFilters.category = [
          ...new Set(response.data.item.map((item) => item.category)),
        ];
        this.allFilters.vehicleMake = [
          ...new Set(response.data.item.map((item) => item.vehicleMake)),
        ];
      });
    } catch (error) {
      console.error(error);
    }
  };

  applyFilters = (value, filterType) => {
    runInAction(() => {
      if (this.appliedFilters[filterType].includes(value)) {
        const index = this.appliedFilters[filterType].indexOf(value);
        this.appliedFilters[filterType].splice(index, 1);
      } else {
        this.appliedFilters[filterType].push(value);
      }
    });
  };

  clearActiveFilters = () => {
    runInAction(() => {
      for (let prop in this.appliedFilters) {
        if (prop.length > 0) {
          this.appliedFilters[prop] = [];
        }
      }
      this.setParams({ searchQuery: "" });
    });
  };

  buildSearchQuery() {
    const filters = [];

    for (const [column, values] of Object.entries(this.appliedFilters)) {
      if (values.length === 0) {
        continue;
      }
      if (values.length === 1) {
        filters.push(`${column}='${values[0]}'`);
      } else {
        const orFilters = values
          .map((val) => `${column}='${val}'`)
          .join(" OR ");
        filters.push(`(${orFilters})`);
      }
    }

    if (filters.length === 0) {
      return;
    } else {
      const query = `WHERE ${filters.join(" AND ")}`;

      this.setParams({ searchQuery: query });
    }
  }
}

const vehiclesStore = new VehiclesStore();

export default vehiclesStore;
