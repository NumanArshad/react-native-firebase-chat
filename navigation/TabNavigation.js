// import React from "react";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import MainStackNavigator from "./StackNavigation/MainStackNavigator";
// import SearchStackNavigator from "./StackNavigation/SearchStackNavigator";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import Home from "../screens/Home";
// import { Button } from "react-native";

// const Tab = createMaterialTopTabNavigator();

// function MyTabBar({ navigation }) {
//   return (
//     <Button
//       title="Go somewhere"
//       onPress={() => {
//         // Navigate using the `navigation` prop that you received
//         // navigation.navigate('SomeScreen');
//         alert("vh");
//       }}
//     />
//   );
// }

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator
//       activeColor="#f0edf6"
//       inactiveColor="#3e2465"
//       //style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}
//       tabBarOptions={{
//         showIcon: true,
//         iconStyle: { alignItems: "flex-start" },
//         tabStyle: { flexDirection: "row" },
//       }}
      
//       //   tabBar={props => <MyTabBar {...props}/>}

//       //   screenOptions={({ route }) => ({
//       //     tabBarIcon: ({ tintColor, focused }) => (
//       //       <Ionicons
//       //         name={focused ? "ios-person" : "md-person"}
//       //         color={tintColor}
//       //         size={25}
//       //       />
//       //     ),
//       //   })}
//       //style={{display:"none"}}
//       screenOptions={({ route }) => ({
//         // tabBarColor:"yellow",
//         //tabBarTestID:2,
//         //tabBarAccessibilityLabel:"hello",
//         tabBarBadge: "3",

//         tabBarIcon: ({ focused }) => (
//           <Ionicons
//             name={focused ? "ios-person" : "md-person"}
//             color={focused ? "red" : "black"}
//             size={25}
//             style={{ marginBottom: -3 }}
//           />
//         ),
//       })}
//       shifting={true}
//     >
//       <Tab.Screen
//         name="home"
//         options={{ tabBarColor: "red" }}
//         // options={{
//         //   tabBarIcon: () => <Ionicons name={"ios-information-circle"} />,
//         // }}
//         listeners={{
//           tabPress: (e) => {
//             //  e.preventDefault();
//             alert("tab Press");
//           },
//         }}
//         component={MainStackNavigator}
//       />
//       <Tab.Screen
//         name="contact"
//         component={SearchStackNavigator}
//         options={{ tabBarColor: "purple" }}
//         listeners={{
//           tabPress: (e) => {
//             //e.preventDefault();
//             alert("tab 2 Press");
//           },
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default TabNavigator;
