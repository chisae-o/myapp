import { memo } from "react";
import { Text, View } from "react-native";

export const Logs = memo(() => {
  return (
    <View style={{ flex: 1 }}>
      <Text>過去の記録一覧</Text>
    </View>
  );
});
