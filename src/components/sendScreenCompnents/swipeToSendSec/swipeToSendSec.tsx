import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'
import Swiper from './swiper'

type props = {
    showModal : (val : boolean)=> void,
}
const SwipeToSendSec = ({showModal} : props) => {
    return (
        <View style={styles.container}>
            <Swiper showModal={(val)=> showModal(val)}/>
            <Text style={styles.txt}>Swipe to send</Text>
        </View>
    )
}

export default SwipeToSendSec

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.offBlack,
        paddingHorizontal: SIZES.padding2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    txt: {
        color: COLORS.darkgray,
        ...FONTS.body3
    }
})