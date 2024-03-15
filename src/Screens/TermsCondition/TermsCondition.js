import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import imagePath from '../../constants/imagePath'
import styles from './Styles'
import color from '../../styles/color'
import navigationStrings from '../../constants/navigationStrings'
import WrapperContainer from '../../Components/WrapperContainer'
import strings from '../../constants/lang'

export default function TermsCondition({ navigation }) {
    return (
        <WrapperContainer>
            <View style={styles.container}>
                <Image style={styles.logoStyle} resizeMode='contain' source={imagePath.icLogo} />
                <Text style={styles.heading}>{strings.WELCOME_TO_CHATBES}</Text>
                <Text style={styles.descStyle}>{strings.READ_OUR} <Text style={{ color: color.blue }}>{strings.PRIVACY_POLICY}</Text>
                    <Text>{strings.TAP_AGREE_AND_CONTINUE_TO_CEEPT_THE}
                        <Text style={{ color: color.blue }}>{strings.TERMS_OF_SERVICE}</Text></Text> </Text>
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate(navigationStrings.PHONE_NUMBER)}>
                    <Text style={styles.agreeStyle}>{strings.AGREE_AND_CONTINUE}</Text>
                </TouchableOpacity>
            </View>
        </WrapperContainer>
    )
}
