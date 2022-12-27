import React from 'react'
import { TextInput, View,Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { register_style } from '../../components/style/component_styles';
import Button from '../../components/Button';
export default function Register() {
  return (
    <View style={register_style.main}>
        <SafeAreaView>
            <View style={register_style.content}>

            <Text style={register_style.title}>Size yardımcı olmak için kayıt olunuz</Text>
            <TextInput style={register_style.input} placeholder='Lütfen Adınızı Yazınızı' />
            <TextInput style={register_style.input} placeholder='Lütfen Email Yazınızı' />
            <TextInput style={register_style.input} placeholder='Lütfen Password Yazınızı' />
            <View style={register_style.btnContainer}>
            <Button title="Sign In" />
            <Button title="Sign Up" />

            </View>
            
            </View>
        </SafeAreaView>
    </View>
  );
}
