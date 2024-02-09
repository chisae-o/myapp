import { Text, View } from "react-native";

import { memo } from "react";
import { MyTabs } from "../layouts/MyTabs";

export const Login = memo(() => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Login画面</Text>
      <MyTabs />
    </View>
  );
});
