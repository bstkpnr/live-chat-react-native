import React from 'react'
import {Text,View,TouchableOpacity} from 'react-native'
import { chat_style } from './style/component_styles'

export default function Contact({customer_name,subtitle,onPress}) {
  return (
    <TouchableOpacity style={chat_style.chat_row} onPress={onPress}>
    <View style={chat_style.user_avatar}>
      <Text style={chat_style.avatar_name}>{customer_name}</Text>
    </View>
    <View style={chat_style.text_container}>
      <Text style={chat_style.customer_name}>{customer_name}</Text>
      <Text style={chat_style.subtitle}>{subtitle}</Text>
    </View>
  </TouchableOpacity>
  )
}
