import { moderateScale, textScale, moderateScaleVertical } from "../../styles/responsiveSize"
import { StyleSheet } from "react-native"
import fontFamily from "../../styles/fontFamily"

const styles = StyleSheet.create({
    descStyle : {
      fontSize: textScale(12),
      fontFamily: fontFamily.blackFont,
      marginLeft: moderateScale(16),
      textAlign:'center'
    },
    bottomText: {
        fontSize: textScale(12),
        fontFamily: fontFamily.blackFont,
        marginLeft: moderateScale(16),
        textAlign:'center'
        
    },
    inputStyles : {
        marginVertical: moderateScaleVertical(42),
        marginRight: 8,
        height: moderateScale(42),
        width: moderateScale(42),
        borderBottomWidth: 1,
        textAlign:'center'
    }
})

export default styles
  