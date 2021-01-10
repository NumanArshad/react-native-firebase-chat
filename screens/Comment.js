import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Text, View, Button } from "react-native";


const Comment = ({navigation}) => {
const isFocus = useIsFocused();

//     useFocusEffect(()=>{
// alert("focus now")
//     },[])

    return <View>
        
        <Text>comment page {isFocus ? `update` : `new`}</Text>
        <Button title="stack navs" onPress={()=>navigation.navigate("post")}/>

    </View>
}

export default Comment;