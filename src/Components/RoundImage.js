import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, textScale } from '../styles/responsiveSize'
import color from '../styles/color'
import fontFamily from '../styles/fontFamily'


const RoundImage = ({
  image = '',
  size = 80,
  onPress = () => { }

}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{
        height: moderateScale(size),
        width: moderateScale(size),
        borderRadius: moderateScale(size / 2),
        backgroundColor: color.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: color.grey

      }}>
      {!!image ? <Image style={{
        height: moderateScale(size),
        width: moderateScale(size),
        borderRadius: moderateScale(size / 2)
      }} source={{ uri: image }} /> : <Text style={styles.textStyle}>add photo</Text>}
    </TouchableOpacity>
  )
}

export default RoundImage

const styles = StyleSheet.create({
  textStyle: {
    fontSize: textScale(12),
    fontFamily: fontFamily.blackFont,
    color: color.lightBlue

  }
})