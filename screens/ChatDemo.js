import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
 
export function ChatDemo() {
  const [messages, setMessages] = useState([]);
 
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hell developer',
        name: 'hgh',
        createdAt: new Date(),
        
       avatar: 'https://placeimg.com/140/140/any',  
        user: {
          _id: 2,
          text: 'Hell develo',
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
  
        },
       // image: 'https://placeimg.com/140/140/any',
    
      },
    ])
  }, [])
 
  const onSend = useCallback((messages = []) => {
    console.log("meeesag is ", messages)
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])
 
  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
      _id: 2,
       
    }}
    showUserAvatar
    />
  )
}