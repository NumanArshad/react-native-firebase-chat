import React from "react"
import {View, Text, Button} from "react-native";
import { TextInput } from "react-native-gesture-handler";

const TodoContainer = ({navigation})=> {
    return (<View>
        <Text>welcome to todo container</Text>
        <TextInput keyboardType={"phone-pad"}/>
        <Button onPress={()=>navigation.setOptions({title:"Update title"})} title="update todo title" />
        <Button onPress={()=>navigation.navigate('profile')} title="profile screen" />

        <Button onPress={()=>navigation.navigate('dashboard',{userId:23,name:"From params dashboard"})} title="Home dashboard" />
    </View>)
}
 export default TodoContainer;