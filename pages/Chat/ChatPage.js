import React, {useEffect} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {chat_style} from '../../components/style/component_styles';
import Contact from '../../components/Contact';
import {auth,database} from '../../services';
import { doc, getDoc, getDocs, collection, addDoc, updateDoc, deleteDoc} from "firebase/firestore";
export default function ChatPage({navigation}) {
  // useEffect(() => {
  //   auth.onAuthStateChanged(customer => {
  //     if (!customer) {
  //       navigation.navigate('Login');
  //     }
  //   });
  // }, []);



  const chat_detail = [
    {
      users: ['test@mail.com', 'a@mail.com'],
      messages: [],
    },
    {
      users: ['test@mail.com', 'b@mail.com'],
      messages: [],
    },
    ,
    {
      users: ['test@mail.com', 'c@mail.com'],
      messages: [],
    },
    ,
    {
      users: ['test@mail.com', 'd@mail.com'],
      messages: [],
    },
  ];

  return (
    <SafeAreaView style={chat_style.chat_main}>
      {chat_detail.map((e, i) => (
        <React.Fragment key={i}>
          <Contact
            customer_name={e.users.find(val => val !== auth.currentUser?.email)}
            subtitle={'Hello '}
            onPress={() => {
              navigation.navigate('ChatRoom');
            }}
          />
          <View style={chat_style.serprator} />
        </React.Fragment>
      ))}
    </SafeAreaView>
  );
}
