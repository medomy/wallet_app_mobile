import { StyleSheet, Text, TouchableOpacityProps, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FONTS, SIZES } from '../../../constants'

type props = {
    bgColor: string,
    txtColor: string,
    btnProps: TouchableOpacityProps,
    txt: string,
    width: string | number
}
const Btn2 = ({ bgColor, btnProps, txtColor, txt, width }: props) => {
    return (
        <TouchableOpacity style={[styles.btn, { backgroundColor: bgColor, width }]} {...btnProps}>
            <Text style={[styles.txt, { color: txtColor }]}>{txt}</Text>
        </TouchableOpacity>
    )
}

export default Btn2

const styles = StyleSheet.create({
    btn: {
        paddingHorizontal: SIZES.padding2,
        paddingVertical: 3 * SIZES.padding2,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4.5 * SIZES.btnRadius
    },
    txt: {
        ...FONTS.body3
    }
})