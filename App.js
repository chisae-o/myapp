import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { View } from "react-native";
import { Login } from "./src/pages/Login";
import { MyTabs } from "./src/layouts/MyTabs";

import { Today } from "./src/pages/Today";
import { Master } from "./src/pages/Master";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Master" component={Master} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
