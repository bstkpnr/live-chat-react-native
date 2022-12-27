import React from 'react'
import { View,Button } from 'react-native';

export default function LoginPage({navigation}) {
  return (
    <View>

        <Button onPress={()=>navigation.navigate("Chat")} title="Selam"></Button>
    </View>
  )
}
