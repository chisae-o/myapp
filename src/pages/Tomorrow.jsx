import { memo } from "react";
import { Text, View } from "react-native";

export const Tomorrow = memo(() => {
  return (
    <View style={{ flex: 1 }}>
      <Text>明日のタスク</Text>
    </View>
  );
});
