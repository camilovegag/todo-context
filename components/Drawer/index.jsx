import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "../../screens/Home";
import { Deleted } from "../../screens/Deleted";

const { Screen, Navigator } = createDrawerNavigator();

export const Drawer = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="Deleted" component={Deleted} />
    </Navigator>
  );
};
