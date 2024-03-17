import { StyleSheet, Text, TouchableOpacity, Image, View, FlatList } from 'react-native'
import { Fragment, useEffect, useState } from 'react';
import React, {useCallback} from 'react'
import imagePath from '../constants/imagePath'
import Modal from "react-native-modal";
import color from '../styles/color';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from './HeaderComponent';
import countries from './countries';
import HorizontalLine from './HorizontalLine';
import fontFamily from '../styles/fontFamily';
import { textScale } from '../styles/responsiveSize';
import { SvgUri } from 'react-native-svg';
const CountryPicker = ({
    fetchCountry = ()  => {},
    value = ""
}) => {
    const [data , setData ] = useState(countries)
    const [showModel, setShowModel] = useState(false)


    const renderItem = useCallback(({item , index}) => {
        return (
            <TouchableOpacity style={{marginHorizontal: 16, flexDirection:'row'}}
            activeOpacity={0.7}
            onPress={() => onSelectCountry(item)}
            >
                {/* <SvgUri 
                  width={"90"}
                  height={"80"}
                  uri={item.flag}
                /> */}
                <Text style={{...styles.nameStyle, 
                    color: value == item.name ? color.lightBlue : color.black,
                    }}>{item?.name} ({item.dialCode})</Text>
            </TouchableOpacity>
        )

    },[data, value])


    const onSelectCountry = (item) => {
        fetchCountry(item)
        setShowModel(false)

    }

    return (
        <Fragment>
            <TouchableOpacity style={styles.container}
                onPress={() => setShowModel(true)}
                activeOpacity={0.7}
            >
                <Text style={styles.valueStyle}>{value}</Text>
                <Image source={imagePath.icForward} />
            </TouchableOpacity>
            <Modal
                style={{ backgroundColor: color.white, margin: 0 }}
                isVisible={showModel} >
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <HeaderComponent centerText='Select your country' onPressRight = {() => setShowModel(false)}/>
                        <View>
                           <FlatList
                            data={data}
                            renderItem={renderItem}
                            ItemSeparatorComponent={() => <HorizontalLine lineStyle={{ marginVertical: 12 }}/>}
                           />
                        </View>

                    </View>
                </SafeAreaView>
            </Modal>
        </Fragment>
    )
}


export default React.memo(CountryPicker) 

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.8,
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    valueStyle: {
        color: color.lightBlue
    },
    nameStyle : {
        color: color.lightBlue,
        fontFamily: fontFamily.bold,
        fontSize: textScale(18)

    }
})