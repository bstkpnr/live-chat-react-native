import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const main_style = StyleSheet.create({
  main: {
    backgroundColor: '#F7F7F7',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_input: {
    height: 20,
    width: 100,
    margin: 5,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    fontSize: 22,
    color: '#F7F7F7',
    fontFamily: 'Poppins-Bold',
    marginTop: 10,
    textAlign: 'center',
  },
  imgContainer: {
    marginBottom: 40,
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#161616',
  },
  sub_text: {
    color: '#F7F7F7',
    marginTop: 10,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  container: {
    flex: 0.3,
    backgroundColor: '#205295',
    borderWidth: 1,
    borderRadius: 20,
    padding: 6,
  },
});
const login_style = StyleSheet.create({
  main: {
    backgroundColor: '#F7F7F7',
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white',
    fontSize: 18,
    marginTop: 16,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#2B3467',
    margin: 20,
  },
  register_text: {
    color: '#bd59d4',
    fontWeight: '700',
    fontSize: 20,
  },
  img: {
    width: 300,
    height: 300,
  },
  btnContainer: {
    backgroundColor: '#bd59d4',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  login_text: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
    color: '#fff',
  },
  text: {
    fontFamily: 'Poppins-Black',
    fontSize: 28,
    fontWeight: '500',
    color: '#333',
    marginBottom: 30,
  },
  container_x: {
    backgroundColor: '#205295',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 6,
    color: 'white',
    fontSize: 18,
  },
  main_x: {
    alignItems: 'center',
    marginBottom: 30,
  },
});
const chat_style = StyleSheet.create({
  chat_main: {
    backgroundColor: '#FAF8F1',
    flex: 1,
  },
  customer_name: {
    fontSize: 14,
    color: '#cc0066',
  },
  subtitle: {
    marginTop: 2,
    color: '#121212',
  },
  serprator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#e2e2e2',
    marginStart: 16,
  },
  chat_row: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },

  text_container: {
    flex: 1,
    marginStart: 15,
  },
  user_avatar: {
    backgroundColor: 'purple',
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar_name: {
    fontSize: 20,
    color: 'white',
  },
});
const register_style = StyleSheet.create({
  main: {
    backgroundColor: '#F7F7F7',
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 26,
    color: 'white',
    fontWeight: '800',
  },
 
  input: {
  flex:1,paddingVertical:0,paddingHorizontal:20
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },
  container_x: {
    backgroundColor: '#bd59d4',
    borderRadius: 25,
    height: 50,
    width: 160,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 10,
  },
  main_x: {
    alignItems: 'center',
    marginBottom: 30,
  },
  img: {
    width: 300,
    height: 300,
  },
});
export {main_style, chat_style, register_style, login_style};
