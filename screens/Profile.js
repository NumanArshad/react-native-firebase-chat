import React, { useState } from "react";
import { Text, View, Image, Button } from "react-native";

const Profile = ({ navigation }) => {
  const [count, setCount] = useState(0);

  //   React.useEffect(()=>{
  //     alert(count)
  //   },[count])

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "hello guys",
      headerRight: () => (
        <Button onPress={() => setCount(count + 1)} title="count" />
      ),
    });
  }, [navigation,count]);

  return (
    <View>
      <Text>profile</Text>
      <Text>{count}</Text>
      <Button onPress={() => setCount(count + 1)} title="submit" />
    </View>
  );
};

export default Profile;
