import React from "react";
import { Button, Text, View } from "react-native";
import {useFocusEffect, useIsFocused} from "@react-navigation/native"
const Post = ({navigation}) => {
  useFocusEffect(()=>{
//alert("here focus")
  },[])
    return <View>
        <Text>post page </Text>
        <Button title="stack navs" onPress={()=>navigation.navigate("comment")}/>
    </View>
}

export default Post;