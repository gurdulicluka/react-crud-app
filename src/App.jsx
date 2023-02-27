import React, { useEffect } from "react";

import store from "./common/vehiclesStore";
import Pagination from "./components/Pagination/Pagination";
import Header from "./layout/Header";
import List from "./layout/List";

function App() {
  useEffect(() => {
    store.getVehicles();
  }, []);

  return (
    <div className="w-screen pb-10">
      <Header />
      <List />
      <Pagination />
    </div>
  );
}

export default App;
