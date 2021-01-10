import React, { useEffect, useState } from "react";
import {
  Button,
  Text,
  View,
  RefreshControl,
  TextInput,
  SafeAreaView,
  Alert,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";

import * as SQLite from "expo-sqlite";
import databaseInstance from "../utils/databaseInstance";
import firebase from "../utils/firebaseConfig";
import { firestore } from "firebase";

// import * as firebase from "firebase";

const db = SQLite.openDatabase("db.testDb"); // returns Database object

const Home = ({ navigation }) => {
  const fireStoreRef = firebase.firestore().collection("customers");

  useEffect(() => {
    console.log("gegeg");
    //    getAllTodos();

    getFiresStoreTodo();
  }, []);

  const getFiresStoreTodo = () => {
    return fireStoreRef.get().then((res) => {
      var lst = [];
      querySnapshot.forEach((dt) => {
        const { name, contact } = dt.data();
        lst.push({ name, contact, key: dt.id });
      });
      setLst(lst);
    });
    // fireStoreRef.onSnapshot((querySnapshot) => {
    //   console.log("firestore data");
    //   var lst = [];
    //   querySnapshot.forEach((dt) => {
    //     const { name, contact } = dt.data();
    //     lst.push({ name, contact, key: dt.id });
    //   });
    //   setLst(lst);
    // });
  };

  const deleteFireStore = (id) => {
    var ref = fireStoreRef.firestore.collection("customers").doc(id);
    ref
      .set({
        name: "hahah",
        age: 20,
      })
      .then((res) => {
        //  if (res.exists) {
        console.log("offcourse");
        console.log(JSON.stringify(res));
        //}
      })
      .catch((err) => console.error(err));
  };

  //   var ref = firebase.database().ref("products");
  //   //ref.child("john").remove();
  //   //  console.log(rg.parent().key())
  //   //rg.remove().then(res=>console.log("success")).catch(err=>console.log("err"))
  //   ref.on("value", function (snapshot) {
  //     //console.log(JSON.stringify(snapshot))
  //     snapshot.forEach((child) => {
  //      // console.log(child.val());
  //     });
  //   });
  // }, []);

  const [item, setTodo] = useState("");
  const [contact, setContact] = useState("");
  const [lst, setLst] = useState([]);

  const handleTodo = (_) => {
    // console.log(item)
    //  const firebaseConfig = {
    //   apiKey: "AIzaSyDOSew5jSJtcQEF9Brc9Yq0ZzGzV5OUksE",
    //   authDomain: "native-expo-sample.firebaseapp.com",
    //   databaseURL: "https://native-expo-sample.firebaseio.com",
    //   projectId: "native-expo-sample",
    //   storageBucket: "native-expo-sample.appspot.com",
    //   messagingSenderId: "26909316323",
    //   appId: "1:26909316323:web:4e551bde90c8af6cb021d6",
    //   measurementId: "G-TMWNP5RC0B"
    // };

    // firebase.initializeApp(firebaseConfig);

    setTodo("");
    setContact("");
    const ref = firebase.database().ref("products");
    var addkey = ref.push().key;
    var updates = {};
    updates[addkey] = {
      name: item,
      contact: contact,
    };
    getAllTodos();
    return ref
      .update(updates)
      .then((res) => {
        console.log("added success");
      })
      .catch((err) => console.log("error"));
  };

  const getAllTodos = () => {
    console.log("all call");
    const ref = firebase.database().ref("products");

    //ref.child("john").remove();
    // var rg = firebase.database().ref("products/-MKy22VlThpuIRgAbs84");
    //  console.log(rg.parent().key())
    //rg.remove().then(res=>console.log("success")).catch(err=>console.log("err"))

    var connectedRef = firebase.database().ref(".info/connected");

    connectedRef.on("value", function (snap) {
      if (snap.val() === true) {
        alert("connected");
      } else {
        alert("not connected");
      }
    });

    return ref.on("value", function (snapshot) {
      console.log(JSON.stringify(snapshot));
      var lst = [];
      snapshot.forEach((child) => {
        //  setTodo(child.val().name);
        lst.push({
          name: child.val().name,
          contact: child.val().contact,
          key: child.key,
        });
      });
      setLst(lst);
      // setTodo(JSON.stringify(snapshot));
    });
    //return databaseInstance.executeQuery("select * from user_table", setLst);
  };

  const deleteData = () => {
    return databaseInstance.executeQuery(
      "delete from   user_table where user_id=?",
      getAllTodos,
      [1]
    );
  };

  // const getFirebase = (_) => {
  //   const dt = firebase.database().ref();
  //   console.dir(dt);
  // };

  const updateData = () => {
    return databaseInstance.executeQuery(
      "update user_table set user_name=? where user_id=?",
      getAllTodos,
      ["Numan", 2]
    );
  };

  const addFireStore = () => {
    fireStoreRef
      .add({
        name: "hahaha",
        contact: 30,
      })
      .then((res) => console.log("create success"))
      .catch((err) => console.error(err));
  };

  const handleDelete = (id) => {
    alert("hello" + id);
    // alert(firebase.database().ref("products").)
    const dt = firebase
      .database()
      .ref("products")
      .child(id)
      .remove()
      .then((res) => alert("success"));

    //alert().;s
  };

  const Item = ({ title }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  };

  const signUp = (_) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword("numan@mailinator.com", "123456")
      .then((res) => alert("success created"))
      .catch((err) => alert(err));
  };

  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword("numan@mailinator.com", "123456")
      .then((res) => console.log("success signin" + JSON.stringify(res)))
      .catch((err) => alert(err));
  };
  return (
    <View>
      <Text>home page </Text>
      <TextInput
        onChangeText={setTodo}
        value={item}
        underlineColorAndroid="black"
      />
      {/* <RefreshControl fu/> */}
      <TextInput
        onChangeText={setContact}
        value={contact}
        underlineColorAndroid="black"
      />

      {/* <Text> {JSON.stringify(lst)}</Text> */}
      <Button title="about" onPress={handleTodo} />
      {/* 
      <View
        style={{
          margin:20,  
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button title="delete data"
        
        onPress={deleteData} />
        <Button title="update data" onPress={updateData} />
      </View> */}

      <View
        style={{
          margin: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button onPress={() => signUp()} title="signup" />
        <Button onPress={() => login()} title="login" />
      </View>

      <Button onPress={() => addFireStore()} title="add firestore" />
      <ScrollView style={styles.container}>
        {/* <FlatList
          data={lst}
          renderItem={({ item }) => (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
        
              <Button onPress={() => handleDelete(item.key)} title="delete">
                Delete
              </Button>
            </View>
          )}
        /> */}
        <FlatList
          data={lst}
          renderItem={({ item }) => (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>

              <Button onPress={() => deleteFireStore(item.key)} title="delete">
                Delete
              </Button>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    height: 20,
    justifyContent: "center",
    marginVertical: 8,
    marginHorizontal: 16,
    // padding: 20,
  },
  title: {
    //  fontSize: 32,
  },
});

export default Home;
