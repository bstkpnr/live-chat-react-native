import React, {useState} from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';
import {login_style} from '../../components/style/component_styles';
import Button from '../../components/Button';

export default function LoginPage({navigation}) {
  const [customerName, setCustomerName] = useState('');

  const handleSubmit = () => {
    if (customerName == 'Beste' && customerName != null) {
      navigation.navigate('Message');
    } else {
  
    }
  };
  return (
    <View style={login_style.main}>
      <View style={login_style.content}>
      <TextInput
        style={login_style.input}
        onChangeText={setCustomerName}
        value={customerName}
        placeholder="Lütfen Adınızı Giriniz"
      />
<View style={login_style.btnContainer}>

      <Button title='Giriş Yap' onPress={handleSubmit} style={login_style.container_x}/>
      <Button title=' Kayıt Ol' onPress={()=>navigation.navigate('Register')} style={login_style.container_x} />
</View>
      </View>
     
    </View>
  );
}
