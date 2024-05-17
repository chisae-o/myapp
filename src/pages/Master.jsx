import { memo } from "react";
import { Text, View } from "react-native";
import { MyTabs } from "../layouts/MyTabs";
import { Today } from "./Today";

export const Master = memo(() => {
  return (
    <View style={{ flex: 1 }}>
      <MyTabs />
    </View>
  );
});
