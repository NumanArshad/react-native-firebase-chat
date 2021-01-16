import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import firebase from "../utils/firebaseConfig";

export function ChatDemo() {
  const [messages, setMessages] = useState([
    // {
    //   _id: 1,
    //   text: "It's going well! How about you?",
    //   user: {
    //     _id: 3,
    //     name: "Name",
    //     avatar: "https://placeimg.com/140/140/any",
    //   },
    // },
    // {
    //   _id: 2,
    //   text: "What do you do for a living?",
    // },
    // {
    //   _id: 3,
    //    text: "Hello, My name's Hieu Le.\n" + "Nice to meet you!",
    //   user: {
    //     _id: 1,
    //     name: "Name",
    //     avatar: "https://placeimg.com/140/140/any",
    //   },
    // },
  ]);
  const messagesRef = firebase
    .firestore()
    .collection("chatRooms")
    .doc("kQjycgqL1HTJ49KpPRub")
    .collection("messages");

  //console.log("lst is ", messages)

  useEffect(() => {
    let updateMessages = [];

    messagesRef.onSnapshot((snapshot) => {
      console.log("dt is", snapshot.size);
      snapshot.docChanges().forEach((changes) => {
        //console.log("changes", changes.doc.data());
        // const { sentBy };
          if (changes.type === "added") {
        const { sentBy, sentAt, text, _id } = changes.doc.data();
        updateMessages.unshift({
          _id,
          createdAt: sentAt,
          text,
          user: {
            _id: sentBy,
            name: "Name",
            avatar: "https://placeimg.com/140/140/any",
          },
        });
        }
      });

      console.log("my message ", updateMessages, updateMessages?.length);
      setMessages(updateMessages);
    });
  }, []);

  const onSend = useCallback((messages = []) => {
    const { user, ...messageInfo } = messages[0];
    //  console.log("meeesag is ", messageInfo);
    const { _id, text, createdAt } = messageInfo;
    messagesRef.add({
      _id,
      text,
      sentAt: Date.now(),
      sentBy: 2,
    });
    // setMessages((previousMessages) =>
    //   GiftedChat.append(previousMessages, messages)
    // );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
      showUserAvatar
    />
  );
}
