import { StyleSheet } from "react-native";
import fontFamily from "../../styles/fontFamily";
import { height, moderateScale , moderateScaleVertical, textScale, width } from "../../styles/responsiveSize";
import color from "../../styles/color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: color.white,
        paddingHorizontal: moderateScale(16)
    },
    logoStyle: {
        width: width/1.5,
        height: height/2,
        alignSelf: 'center'
    },
    heading: {
        fontSize: textScale(32),
        fontFamily: fontFamily.bold,
        alignSelf:'center'

    },
    descStyle: {
        fontSize: textScale(16),
        fontFamily: fontFamily.regular,
        marginTop: moderateScaleVertical(16)

    },
    agreeStyle: {
        fontSize : textScale(16), 
        fontFamily: fontFamily.thin,
        marginTop: moderateScaleVertical(24), 
        color : 'blue'

    }

})

export default styles;