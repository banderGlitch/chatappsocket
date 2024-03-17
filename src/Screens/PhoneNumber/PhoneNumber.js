import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import strings from '../../constants/lang'
import HeaderComponent from '../../Components/HeaderComponent'
import HorizontalLine from '../../Components/HorizontalLine'
import styles from './Styles'
import CountryPicker from '../../Components/CountryPicker'
import color from '../../styles/color'
import imagePath from '../../constants/imagePath'
import navigationStrings from '../../constants/navigationStrings'
import fontFamily from '../../styles/fontFamily'


export default function PhoneNumber({ navigation }) {


  const [state, setState] = useState({

    selectedCountry: {
      "name": "India",
      "dialCode": "+91",
      "isoCode": "IN",
      "flag": "https://cdn.kcak11.com/CountryFlags/countries/in.svg"

    },
    phoneNumber: ''
  })

  const { selectedCountry,  phoneNumber } = state

  const updateState = (data) => setState((state) => ({ ...state, ...data }))



  const fetchCountry = (data) => {

    updateState({selectedCountry: data})
  }

  const leftCustomView = () => {
    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={imagePath.icBack} />
      </TouchableOpacity>

    )
  }

  const onDone = () => {

    navigation.navigate(navigationStrings.EDIT_PROFILE, {data: state})

  }
  return (

    <WrapperContainer containerStyle={{ paddingHorizontal: 0 }}>
      <HeaderComponent
        centerText={strings.ENTER_YOUR_PHONE_NUMBER}
        containerStyle={{ paddingHorizontal: 16 }}
        leftCustomView={leftCustomView()}
        onPressRight={onDone}
        isLeftView={true}
        rightTextStyle={{
          color : phoneNumber.length > 8 ? color.lightBlue : color.grey,
          fontFamily: phoneNumber.length > 8 ? fontFamily.bold : fontFamily.regular
        }}
        rightPressActive = {phoneNumber.length <= 8}
      />
      <Text style={styles.descStyle}>{strings.CHATBES_WILL_SEND}</Text>
      <HorizontalLine />
      <CountryPicker fetchCountry={fetchCountry} value={selectedCountry?.name} />
      <View style={styles.phoneInputStyle}>
        <Text style={styles.dialCodeStyle}>{selectedCountry?.dialCode}</Text>
        <View style={{ flex: 1 }}>
          <TextInput
            placeholder='Enter your Phone Number'
            keyboardType='phone-pad'
            style={{
              paddingVertical: 12,
              borderBottomColor: color.grey,
              paddingHorizontal: 13
            }}
            onChangeText={text => updateState({phoneNumber: text})}
          />
        </View>
      </View>
    </WrapperContainer>

  )
}
