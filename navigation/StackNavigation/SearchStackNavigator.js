import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../../screens/Search";
import Todos from "../../screens/todos";

const stack = createStackNavigator();

export default function SearchStackNavigator() {
  return (
    <stack.Navigator
     initialRouteName="search"
      screenOptions={{
        headerStyle: {
          backgroundColor: "cyan",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <stack.Screen name="search" component={Search}  />
      <stack.Screen name="todos" component={Todos} />

    </stack.Navigator>
  );
}
