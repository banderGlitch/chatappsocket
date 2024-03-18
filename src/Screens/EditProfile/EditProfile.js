import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import HeaderComponent from '../../Components/HeaderComponent'
import HorizontalLine from '../../Components/HorizontalLine'
import navigationStrings from '../../constants/navigationStrings'
import color from '../../styles/color'
import strings from '../../constants/lang'
import imagePath from '../../constants/imagePath'
import RoundImage from '../../Components/RoundImage'
import { moderateScale, textScale } from '../../styles/responsiveSize'
import fontFamily from '../../styles/fontFamily'
import TextInputComp from '../../Components/TextInputComp'
import ImagePicker from 'react-native-image-crop-picker';
import { androidCameraPermission } from '../../utils/permission'
import styles from './Styles'
import actions from '../../redux/actions'

const EditProfile = ({ navigation, route }) => {
  const [state, setState] = useState({
    image: '',
    name: '',

  })
  const { data } = route.params
  const { image, name } = state

  const updateState = (data) => setState((state) => ({ ...state, ...data }))

  const leftCustomView = () => {
    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={imagePath.icBack} />
      </TouchableOpacity>

    )
  }

  const selectPhoto = async() => {
    const permissionStatus = await androidCameraPermission();
    if (permissionStatus) {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      }).then(res => {
        updateState({image : res.path})
        console.log("image:",image);
      });
      
    }

  }
  const onDone = async() => {
    let apiData = {
      ...state,...data
    }
    try {
      const res = await actions.signUp(apiData)
      console.log("response from api we have", res)
       navigation.navigate(navigationStrings.OTP_VERIFICATION, {data:res?.data})
    }
    catch (error) {
      console.log("error raised is signup api", error)
    }
    console.log("api...data", apiData)
    // navigation.navigate(navigationStrings.OTP_VERIFICATION, {data:{...state, ...data}})

  }

  return (
    <WrapperContainer containerStyle={{ paddingHorizontal: 0 }}>
      <HeaderComponent
        centerText={strings.EDIT_PROFILE}
        containerStyle={{ paddingHorizontal: 16 }}
        leftCustomView={leftCustomView()}
        onPressRight={onDone}
        isLeftView={true}
        rightTextStyle={{
          color : name.length > 3 ? color.lightBlue : color.grey,
          fontFamily: name.length > 3 ? fontFamily.bold : fontFamily.regular
        }}
        rightPressActive = {name.length <= 3}

      />
      <HorizontalLine />
      <View style={{ margin: moderateScale(16) }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RoundImage onPress={selectPhoto} image={image}/>
          <Text style={styles.descStyle}>{strings.ENTER_YOUR_NAME}</Text>
        </View>
      </View>
      <HorizontalLine />
      <TextInputComp placeholder={strings.YOUR_NAME} onChangeText={(text) => updateState({name: text})} />
      <HorizontalLine />
    </WrapperContainer>
  )
}


export default EditProfile