import React from 'react'
import { TouchableOpacity,Text } from 'react-native'
import { register_style } from './style/component_styles'

export default function Button({title,onPress,style}) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
    <Text style={style}>{title}</Text>
</TouchableOpacity>
  )
}
