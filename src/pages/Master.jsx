import { memo } from "react";
import { Text, View } from "react-native";
import { MyTabs } from "../layouts/MyTabs";
import { Today } from "./Today";
import { Header } from "../layouts/Header";

export const Master = memo(() => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <MyTabs />
    </View>
  );
});
