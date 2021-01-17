import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import Ionicons from "react-native-vector-icons/Ionicons";
import MainStackNavigator from "./navigation/StackNavigation/MainStackNavigator";
// import TabNavigator from "./navigation/TabNavigation";

// import DrawerNavigator from "./navigation/DrawerNavigation";
import AuthContext from "./contexts/AuthContext";
import Login from "./screens/Login";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-community/async-storage";
// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="close"
//         onPress={() => props.navigation.closeDrawer()}
//       />
//     </DrawerContentScrollView>
//     // <ScrollView>

//     // <View >
//     //   <Text style={{lineHeight:330}}>kfnsb</Text>
//     //   <Text style={{lineHeight:330}}>kfnsb</Text>
//     //   <Text style={{lineHeight:330}}>kfnsb</Text><Text>kfnsb</Text>
//     // </View>
//     // </ScrollView>
//   );
// }

// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator
//       openByDefault
//       drawerType={"back"}
//       drawerStyle={{ backgroundColor: "orange" }}
//       drawerContent={(props) => <CustomDrawerContent {...props} />}
//       drawerContentOptions={{
//         activeTintColor: "#e91e63",
//         itemStyle: { marginVertical: 230 },
//       }}

//       // overlayColor="transparent"
//     >
//       <Drawer.Screen name="post_dr" component={Post} />
//       <Drawer.Screen name="comment_dr" component={Comment} />
//     </Drawer.Navigator>
//   );
// }

const CustomizeHeaderTitle = () => {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{
        uri:
          "https://i.pinimg.com/564x/dd/9d/5b/dd9d5b5756cab5c03782a2d0fb8392b6.jpg",
      }}
    />
  );
};

// const Tab = createMaterialTopTabNavigator();
// const TabNavContainer = () => {
//   return (
//     <Tab.Navigator
//       tabBarOptions={{
//         //  activeTintColor: "green",
//         // inactiveTintColor: "red",
//         labelStyle: { fontSize: 12 },
//         tabStyle: {
//           justifyContent: "center",
//           alignItems: "center",
//           borderBottomWidth: 0,
//         },

//         //      style:{
//         // display:"none"     }
//       }}
//       //style={{display:"none"}}

//       swipeEnabled={false}
//       // initialRouteName="post"
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ tintColor, focused }) => (
//           <Ionicons
//             name={focused ? "ios-person" : "md-person"}
//             color={tintColor}
//             size={25}
//           />
//         ),
//       })}
//     >
//       <Tab.Screen
//         name="post"
//         options={{
//           tabBarIcon: () => <Ionicons name={"ios-information-circle"} />,
//         }}
//         component={Post}
//       />
//       <Tab.Screen name="comment" component={Comment} />
//     </Tab.Navigator>
//   );
// };

// const DrawerContainer = () => {
//   return (
//     <NavigationContainer>
//       <DrawerNavigator />
//     </NavigationContainer>
//   );
// };

const stack = createStackNavigator();

const SplashComponent = () => (
  <View
  style={{
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  }}
>
  <Text style={{ color: "black", fontSize: 30 }}>...loading</Text>
</View>
)



function SplashContainer() {
  return (
    <stack.Navigator>
      <stack.Screen
        name="splash"
        options={{ headerShown: false }}
        component={SplashComponent}
      />
    </stack.Navigator>
  );
}

function AuthNavContainer() {
  return (
    <stack.Navigator>
      <stack.Screen name="login" component={Login} />
    </stack.Navigator>
  );
}

export default function App() {
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case "RESTORE":
          return { ...state, isloading: false, token: action.token };
        case "SIGN_IN":
          return { ...state, isSignIn: true, token: action.token };
        case "SIGN_OUT":
          return { ...state, isSignIn: false, token: null };
      }
    },
    { isloading: true, token: null, isSignIn: false }
  );

  useEffect(() => {
    const loadToken = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem("token");
        //     alert("tk"+userToken)
        console.log("snf", userToken)
      } catch (e) {
        //        alert("get token error")
      }

      authContext.getUser(userToken);
    };
    loadToken();
  }, []);

  const authContext = {
    signIn: () => {
      let token = "dummy token";
      AsyncStorage.setItem("token", token);
      dispatch({ type: "SIGN_IN", token });
    },
    signOut: () => {
      AsyncStorage.removeItem("token"), dispatch({ type: "SIGN_OUT" });
    },
    getUser: (token) => dispatch({ type: "RESTORE", token }),
  };

  if (state.isloading) {
    return (
      <NavigationContainer>
        <SplashContainer />
      </NavigationContainer>
    );
  }
  return (
    // <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {/* {state.token ? <MainStackNavigator /> : <AuthNavContainer />} */}
        <MainStackNavigator />
      </NavigationContainer>
    // </AuthContext.Provider>
  );
}

//   <NavigationContainer>
//   <stack.Navigator
//     initialRouteName="drawer"

//     screenOptions={{
//       headerStyle: {
//         backgroundColor: "cyan",
//       },
//       headerTintColor: "white",
//       headerTitleStyle: {
//         fontWeight: "bold",
//       },
//     }}
//   >
//           {/* <stack.Screen name="drawer" component={drawerNavigator}/> */}

//     {/* <stack.Screen name="tabs" component={TabNavContainer} /> */}
//     <stack.Screen
//       name="dashboard"
//       component={Dashboard}
//       options={({ route }) => ({ title: route.params?.name })}
//     />
//     <stack.Screen
//       name="todos"
//       component={TodoContainer}
//       options={{
//         title: "Todo Container",
//         headerRight: () => (
//           <Button onPress={() => alert("right")} title="right button" />
//         ),
//         // headerStyle: {
//         //   backgroundColor: "cyan",
//         // },
//         // headerTintColor: "white",
//         // headerTitleStyle: {
//         //   fontWeight: "bold",
//         // },
//       }}
//     />
//     <stack.Screen
//       name="profile"
//       component={Profile}
//       options={{ title: (props) => <CustomizeHeaderTitle {...props} /> }}
//     />
//   </stack.Navigator>

// </NavigationContainer>
