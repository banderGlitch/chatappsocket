import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import strings from '../../constants/lang'
import HeaderComponent from '../../Components/HeaderComponent'
import HorizontalLine from '../../Components/HorizontalLine'
import imagePath from '../../constants/imagePath'
import navigationStrings from '../../constants/navigationStrings'
import styles from './Styles'
import { moderateScaleVertical } from '../../styles/responsiveSize'
import OtpInputs from 'react-native-otp-inputs';
import actions from '../../redux/actions'


export default function OtpVerification({ navigation, route }) {

  const { data } = route?.params

  console.log("Data============>", data)


  const leftCustomView = () => {
    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={imagePath.icBack} />
      </TouchableOpacity>

    )
  }
  const handleChange = async (value) => {
    if (value.length >= 6) {
      actions.signup({
        _id: 'asdasdasdasda',
        ...data
      })

    }



  }
  return (

    <WrapperContainer containerStyle={{ paddingHorizontal: 0 }}>
      <HeaderComponent
        centerText={`${data.selectedCountry.dialCode} ${data?.phoneNumber}`}
        containerStyle={{ paddingHorizontal: 16 }}
        leftCustomView={leftCustomView()}
        onPressRight={() => navigation.navigate(navigationStrings.EDIT_PROFILE)}
        isLeftView={true}
        isRight={false}
      />
      <HorizontalLine />
      <Text style={{ ...styles.descStyle, marginVertical: moderateScaleVertical(24) }}>{strings.WE_HAVE_SENT_YOU_AN_SMS}</Text>
      <Text style={styles.descStyle}>{strings.TO_COMPLETE_YOUR_PHONE_NUMBER}</Text>
      <View style={{ marginHorizontal: moderateScaleVertical(16) }}>
        <OtpInputs
          handleChange={handleChange}
          numberOfInputs={6}
          placeholder='*'
          style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          inputStyles={styles.inputStyles}
        />
      </View>
      <View style={{ marginTop: moderateScaleVertical(42) }}>
        <Text style={styles.bottomText}>{strings.RESEND_CODE}</Text>
      </View>
    </WrapperContainer>

  )
}
