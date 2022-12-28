import React,{useState} from 'react'
import { TextInput, View,Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { register_style } from '../../components/style/component_styles';
import Button from '../../components/Button';
export default function Register({navigation}) {
  const [customerName, setCustomerName] = useState('');
  const [customerMail, setCustomerMail] = useState('');
  const [customerPassword, setCustomerPassword] = useState('');


  const handleRegister=()=>{
    if (customerName == 'Beste' && customerMail=='beste@gmail.com' && customerPassword=='123456') {
      alert("Scratona Hoşgeldiniz")
      navigation.navigate('Login');
    } else {
     alert("Hatalı Giriş")
    }

  }
  return (
    <View style={register_style.main}>
        <SafeAreaView>
            <View style={register_style.content}>

            <Text style={register_style.title}>Size yardımcı olmak için kayıt olunuz</Text>
            <TextInput style={register_style.input} placeholder='Lütfen Adınızı Yazınızı' onChangeText={setCustomerName}
        value={customerName} />
            <TextInput style={register_style.input} placeholder='Lütfen Email Yazınızı' onChangeText={setCustomerMail}
        value={customerMail} />
            <TextInput style={register_style.input} placeholder='Lütfen Password Yazınızı' onChangeText={setCustomerPassword}
        value={customerPassword} secureTextEntry />
            <View style={register_style.btnContainer}>
            <Button title="Kayıt Ol"  style={register_style.container_x} onPress={handleRegister} />

            </View>
            
            </View>
        </SafeAreaView>
    </View>
  );
}
