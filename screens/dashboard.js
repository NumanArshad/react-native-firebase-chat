import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Dashboard({route, navigation}) {

  useEffect(()=>{
//alert("dashboard focus")
  },[])

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "cyan",
      }}
    >
      <Text>      {route.params?.userId}
</Text>
<Button title="Go back" onPress={()=>navigation.push("todos")}/>
      <View
        style={{
          height: "40%",
          backgroundColor: "yellow",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 150,
            height: 150,
            backgroundColor: "black",
            borderRadius: 100,
          }}
        ></View>
      </View>
      <Button onPress={()=>navigation.navigate('dashboard')} title="Home dashboard" />

      <View style={{ flex: 1, backgroundColor: "red" }}></View>
      <View
        style={{
          height: "50%",
          backgroundColor: "light-grey",
          padding: 5,
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <View style={{ width: "50%", padding: 5, height: "50%" }}>
          <View style={{ flex: 1, backgroundColor: "orange" }}></View>
        </View>
        <View style={{ width: "50%", padding: 5, height: "50%" }}>
          <View style={{ flex: 1, backgroundColor: "orange" }}></View>
        </View>
        <View style={{ width: "50%", padding: 5, height: "50%" }}>
          <View style={{ flex: 1, backgroundColor: "orange" }}></View>
        </View>
        <View style={{ width: "50%", padding: 5, height: "50%" }}>
          <View style={{ flex: 1, backgroundColor: "orange" }}></View>
        </View>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "cyan",
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
