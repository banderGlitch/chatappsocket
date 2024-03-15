import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../styles/color'
import { SafeAreaView } from 'react-native-safe-area-context'

const WrapperContainer = ({
    statusBarColor = color.white, 
    barStyle='dark-content',
    children,
    containerStyle = {}
    // This is done to apply different styles in container
}) => {
  return (
    <View style={{...styles.container, ...containerStyle}}>
        <StatusBar backgroundColor={statusBarColor} barStyle={barStyle}/>
      <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>
    </View>
  )
}

export default WrapperContainer

const styles = StyleSheet.create({
    container : {
        flex: 1, 
        backgroundColor : color.white,
        paddingHorizontal: 16
    }
})