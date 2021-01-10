import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import Home from "../../screens/Home";
import About from "../../screens/About";
import TabNavigator from "../TabNavigation";
import { ChatDemo } from "../../screens/ChatDemo";

const stack = createStackNavigator();



export default function MainStackNavigator() {
  return (
    <stack.Navigator
      initialRouteName="about"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#9AC4F8",
        },
        
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,

        headerTintColor: "white",

        headerBackTitle: "Back",
      }}
    >
      <stack.Screen name="home" component={ChatDemo} />
      <stack.Screen name="about" component={About} />

      {/* <stack.Screen
      
          name="dashboard"
          component={Dashboard}
          options={({ route }) => ({ title: route.params?.name })}          
        />
        <stack.Screen
          name="todos"
          component={TodoContainer}
          options={{
           // headerStatusBarHeight:20,
            // title: "Todo Container",
            // headerRight: () => (
            //   <Button onPress={() => alert("right")} title="right button" />
            // ),
            //headerShown:false
            // headerStyle: {
            //   backgroundColor: "cyan",
            // },
            // headerTintColor: "white",
            // headerTitleStyle: {
            //   fontWeight: "bold",
            // },
          }}
        />
        <stack.Screen
          name="profile"
          component={Profile}
          options={{ title: (props) => <CustomizeHeaderTitle {...props} /> }} */}
      {/* /> */}
    </stack.Navigator>
  );
}
