import React, { useState, useCallback, useEffect } from 'react'
import { Image } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'


export default function ChatRoom() {
  const [messages, setMessages] = useState([]);

  

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'İyi günler Dunder Mifflin Destek Hattından Pam.Size Nasıl Yardımcı Olabilirim?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://gravatar.com/avatar/1b6f2b2a444f0cb054011f9f14b83dd6?s=400&d=robohash&r=x',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (

      <GiftedChat
      
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />

  )
}