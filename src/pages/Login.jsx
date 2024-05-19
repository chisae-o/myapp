import {
  Button,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { memo, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

export const Login = memo(({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Text style={{ fontSize: 20, marginBottom: 20 }}>ログイン画面</Text>
      <View style={{ marginBottom: 20 }}>
        <TextInput
          style={{
            width: 250,
            borderWidth: 1,
            padding: 5,
            borderColor: "gray",
          }}
          onChangeText={setEmail}
          value={email}
          placeholder="メールアドレスを入力してください"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View style={{ marginBottom: 20 }}>
        <TextInput
          style={{
            width: 250,
            borderWidth: 1,
            padding: 5,
            borderColor: "gray",
          }}
          onChangeText={setPassword}
          value={password}
          placeholder="パスワードを入力してください"
          secureTextEntry={true}
          autoCapitalize="none"
        />
      </View>
      <TouchableOpacity
        style={{
          padding: 10,
          backgroundColor: "#88cb7f",
          borderRadius: 10,
        }}
        onPress={handleLogin}
      >
        <Text style={{ color: "white" }}>ログイン</Text>
      </TouchableOpacity>
      <Button
        title="ユーザー登録はこちら"
        onPress={() => navigation.navigate("Register")}
      />
    </KeyboardAvoidingView>
    // <View style={{ flex: 1 }}>
    //     <Text>Login画面</Text>
    //     <Button title="Login" onPress={() => navigation.navigate("Master")} />
    //
    //   </View>
  );
});
