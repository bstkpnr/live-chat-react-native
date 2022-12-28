import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import ChatRoom from './pages/Chat/ChatRoom';
import {main_style} from './components/style/component_styles';
import {TouchableOpacity, View, Text, Image} from 'react-native';
function App() {
  const Stack = createNativeStackNavigator();

  const Main = ({navigation}) => {
    return (
      <View style={main_style.main}>
        <Image
          style={main_style.imgContainer}
          source={require('./components/style/img/dwight.jpeg')}
        />
        <View style={main_style.container}>
          <Text style={main_style.text}>
            Dunder Mifflin Müşteri Destek Hattına
          </Text>
          <Text style={main_style.text}>Hoşgeldiniz!</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={main_style.sub_text}>Lütfen Giriş Yapınız</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Login" component={LoginPage} options={{headerShown: false}} />
        <Stack.Screen name="Message" component={ChatRoom} options={{headerShown: false}} />
        <Stack.Screen name="Register" component={RegisterPage} options={{headerShown: false}} />
        <Stack.Screen name="ChatRoom" component={ChatRoom} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
