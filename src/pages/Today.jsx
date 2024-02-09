import { memo } from "react";
import { Text, View } from "react-native";

export const Today = memo(() => {
  return (
    <View style={{ flex: 1 }}>
      <Text>今日のタスク</Text>
    </View>
  );
});
