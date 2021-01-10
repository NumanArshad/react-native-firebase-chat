import React,{useEffect} from "react";
import { Button, Text, View } from "react-native";
import {useFocusEffect, useIsFocused} from "@react-navigation/native"
const Search = ({navigation}) => {





    return <View>
        <Text>search page </Text>
        <Button title="todos" onPress={()=>navigation.navigate("todos")}/>
    </View>
}

export default Search;