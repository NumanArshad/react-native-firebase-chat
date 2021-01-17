import React, { useState, useEffect } from "react";
import {
  Button,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  Platform,
  Image
} from "react-native";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import firebase from "../utils/firebaseConfig";

const About = ({ navigation }) => {
  const [formData, setFormData] = useState({ name: "", contact: "",imageUri:'' });
  const [allTodos, setTodos] = useState([]);

  const firestoreRef = firebase.firestore().collection("Userdata");

  const { name, contact,imageUri } = formData;
  useEffect(() => {
    //alert("here focus")
    // handleAllTodo(); //realtime
    handleGetFireStore(); //firestore

    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("not");
        } else {
          alert("good granted");
        }
      }
    })();
  }, []);

  const handleChange = (name, text) => {
    setFormData({ ...formData, [name]: text });
  };
  ////////////////////////Firetore collection/////////////////////////
  const handleGetFireStore = (_) => {
    firestoreRef.onSnapshot((resp) => {
      let lst = [];
      resp.forEach((res) => {
        const { name, contact } = res.data();
        lst.push({ name, contact, key: res.id });
      });
      setTodos(lst);
    });
  };

  const handleAddFirestore = (_) => {
    firestoreRef.add(formData).then((res) => console.log("add success"));
  };

  const handleUpdateFiretore = (key) => {
    firestoreRef
      .doc(key)
      .update({
        name: "hey updated?",
      })
      .then((res) => alert("good collection updated successfully!"));
  };
  const deleteFirestore = (key) => {
    firestoreRef
      .doc(key)
      .delete()
      .then((res) => alert("deleetd succesfully!"));
  };

  const handleImagePicker = async (_) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    if (!result.cancelled) {
      const {uri:imageUri} = result;
      setFormData({...formData,  imageUri})
    }
  };
  const uploadImage = async () => {
    const storageRef = firebase.storage().ref(`images`);
    // const response = await fetch(imageUri);
    // const blob =await response.blob();
    // storageRef.put(blob).then(
    //   res=>alert("sucess")
    // ).catch(err=>console.error("err"+err))
const url=await storageRef.getDownloadURL();
alert(JSON.stringify(url))
  }
  ////////////////////////Firetore collection/////////////////////////

  ////////////////////Realtime database////////////////
  // const handleAllTodo = (_) => {
  //   const ref = firebase.database().ref("UserInfo");
  //   ref.on("value", (snapshot) => {
  //     let lst = [];
  //     console.log(snapshot)
  //     snapshot.forEach((child) =>{
  //       lst.push({
  //         name: child.val().name,
  //         contact: child.val().contact,
  //         key: child.key,
  //       })
  //     });
  //     setTodos(lst);
  //   });
  // };

  // const handleAddTodo = (_) => {
  //   setFormData({ name: "", contact: "" });
  //   const ref = firebase.database().ref("UserInfo");
  //   ref
  //     .push(formData)
  //     .then((res) => console.log("success" + JSON.stringify(res)))
  //     .catch((error) => console.error("error" + JSON.stringify(error)));
  // };

  // const handleUpdate = (key) => {
  //   const ref = firebase.database().ref();
  //   let upd = {};
  //   upd[`UserInfo/${key}`] = {
  //     name: "is up?",
  //   };
  //   ref.update(upd);
  // };

  // const handleDelete = (key) => {
  //   const ref = firebase.database().ref(`UserInfo/${key}`);
  //   ref.remove();
  // };
  /////////////////////////Realtime database/////////////////////////
  return (
    <View>
      <Text>about page {JSON.stringify(allTodos)}</Text>

      <TextInput
        value={name}
        onChangeText={(text) => handleChange("name", text)}
        underlineColorAndroid="black"
        placeholder="name here"
      />
      <TextInput
        value={contact}
        onChangeText={(text) => handleChange("contact", text)}
        underlineColorAndroid="black"
        placeholder="contact here"
      />
      {/* <Image source={{uri: imageUri}} width={200} height={200}/> */}
      {/* <Button title="Add Realtime" onPress={handleAddTodo} /> */}
      <Button title="Add Firetore" onPress={handleAddFirestore} />
      <Button title="Pick image" onPress={handleImagePicker} />
      <Button title="Upload image" onPress={uploadImage} />
  
      <Button
        title="hey pull request and apk setup"
        onPress={() => navigation.navigate("home")}
      />
      <ScrollView>
        <FlatList
          data={allTodos}
          renderItem={({ item }) => (
            <View key={item.key}>
              <Text>{item.name}</Text>
              <Button
                title="update"
                onPress={() => handleUpdateFiretore(item.key)}
              ></Button>
              <Button title="delete" onPress={() => deleteFirestore(item.key)}>
                Delete
              </Button>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default About;
