import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
import Home from "./pages/Home";
import CreateRecord from "./pages/CreateRecord";

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: "#0B1F34",
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreateRecord" component={CreateRecord} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
