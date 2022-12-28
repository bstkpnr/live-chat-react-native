import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
// import {auth,database,app} from '../../services';
// import { doc, getDoc, getDocs, collection, addDoc, updateDoc, deleteDoc} from "firebase/firestore";
// import { useRoute } from "@react-navigation/core";

export default function ChatRoom() {
  const [messages, setMessages] = useState([]);

  // const route = useRoute();
  // const [uid, setUID] = useState("");
  // const [customerName, setCustomerName] = useState("");

  // useEffect(() => {
  //   return firebase.auth().onAuthStateChanged((user) => {
  //     setUID(user?.uid);
  //     setName(user?.displayName);
  //   });
  // }, []);

  // useEffect(() => {
  //   return firebase
  //     .database
  //     .doc("messages/" + route.params.chatId)
  //     .onSnapshot((snap) => {
  //       setMessages(snap.data()?.messages ?? []);
  //     });
  // }, [route.params.chatId]);

  // const onSend = (msg = []) => {
  //   firebase
  //     .database
  //     .doc("messages/" + route.params.chatId)
  //     .set(
  //       {
  //         messages: GiftedChat.append(messages, msg),
  //       },
  //       { merge: true }
  //     );
  // };

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'İyi günler Dunder Mifflin Destek Hattından Pam.Size Nasıl Yardımcı Olabilirim?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar:
            'https://gravatar.com/avatar/1b6f2b2a444f0cb054011f9f14b83dd6?s=400&d=robohash&r=x',
        },
       
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <React.Fragment>

      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </React.Fragment>
  );
}
