import axios from "axios";
import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
  toJS,
} from "mobx";

const webApiUrl =
  "https://api.baasic.com/beta/callyse-226-201/resources/vehicles/";

class VehiclesStore {
  constructor() {
    makeObservable(this, {
      vehicles: observable,
      allFilters: observable,
      allRecords: observable,
      appliedFilters: observable,
      params: observable,
      queryString: computed,
      buildSearchQuery: action,
      getFilterData: action,
      getData: action,
      postData: action,
      putData: action,
      deleteData: action,
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

  getData = async () => {
    try {
      const response = await axios.get(webApiUrl + `?${this.queryString}`);
      runInAction(() => {
        this.vehicles = response.data.item;
        this.allRecords = response.data.totalRecords;
        !this.allFilters.vehicleMake.length && this.getFilterData();
      });
    } catch (error) {
      window.alert(error);
    }
  };

  postData = async (newData) => {
    try {
      await axios.post(webApiUrl, newData);
      runInAction(() => {
        this.getData();
      });
    } catch (error) {
      console.error(error);
    }
  };

  putData = async (id, updatedData) => {
    try {
      await axios.put(webApiUrl + id, updatedData);
      runInAction(() => {
        this.getData();
      });
    } catch (error) {
      console.error(error);
    }
  };

  deleteData = async (id) => {
    try {
      await axios.delete(webApiUrl + id);
      runInAction(() => {
        this.vehicles = this.vehicles.filter((item) => item.id !== id);
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
      this.getData();
    });
  };

  getFilterData = async () => {
    try {
      const response = await axios.get(webApiUrl + `?rpp=${this.allRecords}`);
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
