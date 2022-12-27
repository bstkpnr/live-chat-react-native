import React from 'react'
import { TouchableOpacity,Text } from 'react-native'
import { register_style } from './style/component_styles'

export default function Button({title}) {
  return (
    <TouchableOpacity style={register_style.container_x}>
    <Text style={register_style.btn_title}>{title}</Text>
</TouchableOpacity>
  )
}
