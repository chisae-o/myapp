import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { View } from "react-native";
import { Login } from "./src/pages/Login";

export default function App() {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      <View style={{ flex: 1, marginTop: 18 }}>
        <Login />
      </View>
    </NavigationContainer>
  );
}
