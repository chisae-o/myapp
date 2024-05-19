import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "./src/Firebase";
import { Login } from "./src/pages/Login";
import { Master } from "./src/pages/Master";
import RegisterScreen from "./src/pages/Register";
import { View, Text } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  // ユーザー情報の保持
  const [user, setUser] = useState("");
  // ローディング画面の表示をするか
  const [loading, setLoading] = useState(true);

  // ログイン状態かの監視、unsubscribe()でログイン状態ではないという状態にする
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        console.log(user);
        setUser(user);
      } else {
        setUser("");
      }
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          {user ? (
            <Stack.Screen name="Master" component={Master} />
          ) : (
            <Stack.Screen name="Login" component={Login} />
          )}
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
