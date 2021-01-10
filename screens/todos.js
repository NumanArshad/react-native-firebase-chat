import React from "react";
import { Button, Text, View } from "react-native";
import {useFocusEffect, useIsFocused} from "@react-navigation/native"
const Todos = ({navigation}) => {
  useFocusEffect(()=>{
//alert("here focus")
  },[])
    return <View style={{flex:1}}>
        <Text>tododod page </Text>
        <Button title="stack navs" onPress={()=>navigation.navigate("search")}/>
    </View>
}

export default Todos;