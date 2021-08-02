import React from "react";
import { useFonts, OpenSans_400Regular, OpenSans_600SemiBold } from "@expo-google-fonts/open-sans";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { Drawer } from "./components/Drawer";
import { TodoContextProvider } from "./contexts/TodoContext";

export default function App() {
  let [fontsLoaded] = useFonts({
    "open-sans": OpenSans_400Regular,
    "open-sans-semi": OpenSans_600SemiBold,
  });

  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <TodoContextProvider>
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </TodoContextProvider>
  );
}
