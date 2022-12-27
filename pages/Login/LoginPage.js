import React, { useState } from 'react'
import { View,Button, TextInput, SafeAreaView } from 'react-native';
import {main_style} from '../../components/style/component_styles'

export default function LoginPage({navigation}) {

  const [customerName, setCustomerName]=useState("");

  const handleSubmit=()=>{
    if(customerName=="Beste" && customerName !=null){
      navigation.navigate("Chat")
    }
    else{
      alert("GİRİŞ YAPAMAZSIN")

    }
  }
  return (
    <View style={main_style.main}>

      <TextInput style={main_style.text_input} onChangeText={setCustomerName} value={customerName} />

        <Button onPress={handleSubmit} title="Selam"></Button>
        <Button onPress={()=>navigation.navigate('Register')} title="Kayıt Olunuz"></Button>
    </View>
  )
}
