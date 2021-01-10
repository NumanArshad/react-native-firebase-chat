// import React, { useContext } from "react";
// import {
//   createDrawerNavigator,
//   DrawerItemList,
//   DrawerItem,
//   DrawerContentScrollView,
// } from "@react-navigation/drawer";
// import { Divider, Drawer } from "react-native-paper";
// import TabNavigator from "./TabNavigation";
// import ContactStackNavigator from "./StackNavigation/SearchStackNavigator";
// import { View } from "react-native";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import MainStackNavigator from "./StackNavigation/MainStackNavigator";
// import AuthContext from "../contexts/AuthContext";
// import SearchStackNavigator from "./StackNavigation/SearchStackNavigator";



// const drawer = createDrawerNavigator();

// export default function DrawerNavigator() {

// const {signOut} = useContext(AuthContext);
//   return (
//     <drawer.Navigator
//       drawerContent={(props) => {
//         return (
//           <View style={{ flex: 1 }}>
//             <DrawerContentScrollView>
//               {/* extend and add extra items */}
//               <DrawerItemList {...props} />
//             <Divider style={{width:"96%",alignSelf:"flex-end",height:1,backgroundColor:"black"}}/>

//               <DrawerItem
//                 label="Homme"
//                 icon={({ size, color }) => (
//                   <Icon name="exit-to-app" size={size} />
//                 )}
                
//               />
//                 {/* <Drawer.Section> */}
//               <Drawer.Item
//                 label="logout"
//                 icon={({size,color}) => (
//                   <Icon name="exit-to-app" size={size} />
//                 )}
//                 onPress={()=>props.navigation.closeDrawer()}
//               />
//             {/* </Drawer.Section> */}
            
              
//             </DrawerContentScrollView>
//             <Drawer.Section>
//               <Drawer.Item
//                 label="logout"
//                 icon={({ size, color }) => (
//                   <Icon name="exit-to-app" size={size} />
//                 )}
//                 onPress={()=>props.navigation.closeDrawer()}
//               />
//                  <Drawer.Item
//                 label="logout"
//                 icon={({ size, color }) => (
//                   <Icon name="exit-to-app" size={size} />
//                 )}
//                 onPress={()=>props.navigation.closeDrawer()}
//               />
//                  <Drawer.Item
//                 label="logout"
//                 icon={({ size, color }) => (
//                   <Icon name="exit-to-app" size={size} />
//                 )}
//                 onPress={()=>props.navigation.closeDrawer()}
//               />
//             </Drawer.Section>
//             <Drawer.Section>
//               <Drawer.Item
//                 label="logout"
//                 icon={({ size, color }) => (
//                   <Icon name="exit-to-app" size={size} />
//                 )}
//                 onPress={()=>{signOut(),props.navigation.closeDrawer()}}
//               />
//             </Drawer.Section>
//           </View>
//         );
//       }}
//     >
//       <drawer.Screen name="Home" component={MainStackNavigator} />
//       {/* <drawer.Screen name="contact" component={SearchStackNavigator} /> */}
//     </drawer.Navigator>
//   );
// }
