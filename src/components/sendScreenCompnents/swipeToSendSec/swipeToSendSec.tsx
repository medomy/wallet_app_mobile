import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'
import Swiper from './swiper'

const SwipeToSendSec = () => {
    return (
        <View style={styles.container}>
            <Swiper />
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