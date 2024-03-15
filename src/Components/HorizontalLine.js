import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../styles/color'

const HorizontalLine = ({
    lineStyle = {}
}) => {
  return (
    <View style={{...styles.lineStyle, ...lineStyle}}/>
  )
}

export default HorizontalLine

const styles = StyleSheet.create({
    lineStyle : {
      borderBottomWidth: 0.8,
      borderBottomColor : color.grey,
      height: 1
    }
})