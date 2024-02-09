import { memo } from "react";
import { Text, View } from "react-native";

export const RepeatedTaskList = memo(() => {
  return (
    <View style={{ flex: 1 }}>
      <Text>繰り返しタスク一覧</Text>
    </View>
  );
});
