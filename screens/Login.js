import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import AuthContext from "../contexts/AuthContext";
const Login = ({ navigation }) => {
  const { signIn } = useContext(AuthContext);
  useFocusEffect(() => {
    //alert("here focus")
  }, []);
  return (
    <View>
      <Text>Login page </Text>
      <Button title="home" onPress={() => signIn()} />
    </View>
  );
};

export default Login;
