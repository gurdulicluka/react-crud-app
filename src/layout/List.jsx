import { observer } from "mobx-react";

import ListHeader from "../components/List/ListHeader";
import ListItem from "../components/List/ListItem";
import store from "../store/vehiclesStore";

const List = observer(() => {
  return (
    <div className="container mx-auto mt-[80px] shadow-lg">
      <ListHeader results={store.allRecords} />
      <ul className="flex flex-col">
        {store.vehicles.map((vehicle) => {
          return <ListItem key={vehicle.id} vehicle={vehicle} />;
        })}
      </ul>
    </div>
  );
});

export default List;
