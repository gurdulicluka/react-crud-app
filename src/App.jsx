import React, { useEffect } from "react";

import Pagination from "./components/Pagination/Pagination";
import Header from "./layout/Header";
import List from "./layout/List";
import store from "./store/vehiclesStore";

function App() {
  useEffect(() => {
    store.getData();
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
