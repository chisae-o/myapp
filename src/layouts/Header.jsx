import { signOut } from "firebase/auth";
import { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { auth } from "../Firebase";

export const Header = memo(() => {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("logout");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={handleLogout}
        style={{
          marginTop: 10,
          padding: 10,
          backgroundColor: "#88cb7f",
          borderRadius: 10,
          width: 100,
        }}
      >
        <Text style={{ color: "white" }}>ログアウト</Text>
      </TouchableOpacity>
    </View>
  );
});
