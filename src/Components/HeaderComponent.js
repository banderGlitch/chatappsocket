import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import strings from '../constants/lang'
import color from '../styles/color';
import fontFamily from '../styles/fontFamily';
// Resuable Header  component 
const HeaderComponent = ({
    centerText = "",
    rightText = strings.DONE,
    leftCustomView = () => { },
    isLeftView = false,
    containerStyle = {},
    rightTextStyle = {},
    onPressRight = {}
}) => {
  return (
    <View style={{
        ...styles.container,
        ...containerStyle
      }}>
       {isLeftView ? leftCustomView : <View/>}
        <Text style={styles.centerTextStyle}>{centerText}</Text>
        <TouchableOpacity onPress={onPressRight}>
          <Text style={{...styles.rightTextStyles, ...rightTextStyle}}>{rightText}</Text>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.6,
        borderColor: 'grey',
        paddingBottom: 16,
        paddingTop: 6,
        paddingHorizontal: 13
    },
    centerTextStyle : {
        color: color.black,
        fontFamily: fontFamily.bold, 
        fontSize: 20
    },
    rightTextStyles: {
        color: color.grey,
        fontFamily: fontFamily.regular, 
        fontSize: 18

    }
  

})
export default HeaderComponent