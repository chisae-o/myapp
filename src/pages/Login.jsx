import { Button, Text, View } from "react-native";

import { memo } from "react";
import { MyTabs } from "../layouts/MyTabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Today } from "./Today";

export const Login = memo(({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Login画面</Text>
      <Button title="master" onPress={() => navigation.navigate("Master")} />
    </View>
  );
});
