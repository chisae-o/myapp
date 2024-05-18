import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "./src/pages/Login";

import { Master } from "./src/pages/Master";

import RegisterScreen from "./src/pages/Register";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Master" component={Master} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
