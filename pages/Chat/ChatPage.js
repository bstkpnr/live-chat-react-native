import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { chat_style } from '../../components/style/component_styles';
import Contact from '../../components/Contact';


export default function ChatPage({navigation}) {
  return (
    <SafeAreaView style={chat_style.chat_main}>
      <Contact customer_name={"Dunder Mifflin Support"} subtitle={"Hello "} onPress={()=>{navigation.navigate("ChatRoom")}} />
      <View style={chat_style.serprator} />
    <Contact customer_name={"Micheal Scott"} subtitle={"Hello Dude"} onPress={()=>{navigation.navigate("ChatRoom")}}   />     
    </SafeAreaView>
  );
}
