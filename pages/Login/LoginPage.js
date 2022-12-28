import React, {useState} from 'react';
import {
  View,
  TextInput,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {login_style} from '../../components/style/component_styles';

export default function LoginPage({navigation}) {
  const [customerName, setCustomerName] = useState('');
  const [customerPassword, setCustomerPassword] = useState('');

  const handleSubmit = () => {
    if (
      customerName == 'Beste' &&
      customerName != null &&
      customerPassword == '123456'
    ) {
      alert('Scratona Hoşgeldiniz');
      navigation.navigate('Message');
    } else {
      alert("Lütfen hesap oluşturun")
    }
  };

  return (
    <SafeAreaView style={login_style.main}>
      <View style={{paddingHorizontal: 25}}>
        <View style={login_style.main_x}>
          <Image
            source={require('../../components/style/img/login.png')}
            style={login_style.img}
          />
        </View>
      </View>
      <Text style={login_style.text}></Text>
      <View
        style={{
          flexDirection: 'row',
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
          paddingBottom: 8,
          marginBottom: 25,
          paddingHorizontal: 20,
        }}>
        <TextInput
          placeholder="Kullanıcı Adınız"
          style={{flex: 1, paddingVertical: 0, paddingHorizontal: 20}}
          onChangeText={setCustomerName}
          value={customerName}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
          paddingBottom: 8,
          marginBottom: 25,
          paddingHorizontal: 20,
        }}>
        <TextInput
          placeholder="Şifreniz"
          style={{flex: 1, paddingVertical: 0, paddingHorizontal: 20}}
          secureTextEntry
          onChangeText={setCustomerPassword}
          value={customerPassword}
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={handleSubmit}
          style={login_style.btnContainer}>
          <Text style={login_style.login_text}>Giriş</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={login_style.register_text}>Hesap Oluşturun</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
