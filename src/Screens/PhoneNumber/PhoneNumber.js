import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import strings from '../../constants/lang'
import HeaderComponent from '../../Components/HeaderComponent'
import HorizontalLine from '../../Components/HorizontalLine'
import styles from './Styles'
import CountryPicker from '../../Components/CountryPicker'
import color from '../../styles/color'


export default function PhoneNumber({ navigation }) {

  const [selectedCountry, setSelectedCountry] = useState({
    "name": "India",
    "dialCode": "+91",
    "isoCode": "IN",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/in.svg"

  })
  const fetchCountry = (data) => {
    setSelectedCountry(data)
  }
  return (

    <WrapperContainer containerStyle={{ paddingHorizontal: 0 }}>
      <HeaderComponent centerText={strings.ENTER_YOUR_PHONE_NUMBER} containerStyle={{ paddingHorizontal: 16 }} />
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
          />
        </View>
      </View>
    </WrapperContainer>

  )
}
