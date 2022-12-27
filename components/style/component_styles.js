import { StyleSheet, Dimensions } from 'react-native'

const deviceSize = Dimensions.get('window')

const main_style=StyleSheet.create({
    main:{
        backgroundColor: '#0A2647',
         flex: 1, 
         alignItems: 'center', 
         justifyContent: 'center' ,
      },
      text_input:{
       
        height: 20,
        width:100,
        margin: 5,
        borderWidth: 1,
        padding: 10,
}
   

})
const chat_style=StyleSheet.create({
    chat_main:{
        backgroundColor: '#0A2647',
        flex:1
       
      },
      customer_name:{
       
        fontSize:14,
        color:"#cc0066",

},
subtitle:{
marginTop:2,
color:"#121212"
},
serprator:{
    height:StyleSheet.hairlineWidth,
    backgroundColor:'#e2e2e2',
    marginStart:16

},
chat_row:{
    flexDirection:'row',
    paddingHorizontal:16,
    paddingVertical:20
},

text_container:{
flex:1,
marginStart:15
},
user_avatar:{
    backgroundColor:'purple',
    height:40,
    width:40,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center'

},
avatar_name:{
    fontSize:20,
    color:'white'
},

   

})
const register_style=StyleSheet.create({
    main:{
        backgroundColor: '#0A2647',
         flex: 1, 
         alignItems: 'center', 
         justifyContent: 'center' ,
      },
      container:{
      flex:1
},
title:{
    fontSize:26,
    color:'white',
    fontWeight:"800"
},
content:{
    padding:32
},
input:{
    backgroundColor:'white',
    fontSize:15,
    marginTop:16,
    paddingHorizontal:16,
    paddingVertical:12,
    borderRadius:6
},
btnContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:32
} ,
btn_title:{
color:'white',
fontSize:18
},
container_x:{
  backgroundColor:'#cc0066',
  paddingHorizontal: 16,
  paddingVertical:12,
  borderRadius:6
  
}

})
export {main_style,chat_style,register_style}