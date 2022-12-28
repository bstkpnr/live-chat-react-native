import React, {useState} from 'react';
import {TextInput, View, Text, TouchableOpacity, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {register_style} from '../../components/style/component_styles';
import Button from '../../components/Button';
export default function Register({navigation}) {
  const [customerName, setCustomerName] = useState('');
  const [customerMail, setCustomerMail] = useState('');
  const [customerPassword, setCustomerPassword] = useState('');

  const handleRegister = () => {
    if (
      customerName == 'Beste' &&
      customerMail == 'beste@gmail.com' &&
      customerPassword == '123456'
    ) {
      alert('Scratona Kaydınız Başarıyla Gerçekleşmiştir');
      navigation.navigate('Login');
    } else {
      alert('Hatalı Giriş');
    }

    // useEffect(() => {
    //   auth.onAuthStateChanged(customer => {
    //     if (!customer) {
    //       navigation.navigate('Login');
    //     }
    //   });
    // }, []);
  };
  return (
    <SafeAreaView style={register_style.main}>
      <View style={{paddingHorizontal: 25}}>
        <View style={register_style.main_x}>
          <Image
            source={require('../../components/style/img/register.png')}
            style={register_style.img}
          />
        </View>
      </View>
      <View>
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
            placeholder="Email Adresiniz"
            style={{flex: 1, paddingVertical: 0, paddingHorizontal: 20}}
            keyboardType="email-address"
            onChangeText={setCustomerMail}
            value={customerMail}
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
        <View style={register_style.btnContainer}>
          <Button
            title="Kayıt Ol"
            style={register_style.container_x}
            onPress={handleRegister}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
