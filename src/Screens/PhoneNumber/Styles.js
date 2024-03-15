import { StyleSheet } from "react-native";
import fontFamily from "../../styles/fontFamily";
import { moderateScale,moderateScaleVertical, textScale, width, height } from "../../styles/responsiveSize";
const styles = StyleSheet.create({

    descStyle: {
        fontSize: textScale(16),
        fontFamily: fontFamily.regular,
        marginTop: 16,
        marginVertical: moderateScaleVertical(16)


    },
    agreeStyle: {
        fontSize: textScale(16),
        fontFamily: fontFamily.thin,
        marginTop: 24,
        color: 'blue'

    },
    dialCodeStyle: {
        fontFamily: 16,
        fontFamily: fontFamily.regular,
    },
    phoneInputStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.7
    }

})

export default styles;