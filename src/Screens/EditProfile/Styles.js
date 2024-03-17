import { moderateScale,  textScale } from "../../styles/responsiveSize"
import { StyleSheet } from "react-native"
import fontFamily from "../../styles/fontFamily"

const styles = StyleSheet.create({
    descStyle : {
      fontSize: textScale(12),
      fontFamily: fontFamily.blackFont,
      flex: 1,
      marginLeft: moderateScale(16)
    }
})

export default styles
  