import React from "react";
import { useFonts, OpenSans_400Regular } from "@expo-google-fonts/open-sans";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { Drawer } from "./components/Drawer";

export default function App() {
  let [fontsLoaded] = useFonts({
    "open-sans": OpenSans_400Regular,
  });

  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}
