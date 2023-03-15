import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import React from 'react'
import { FONTS, SIZES } from '../../constants'

type props = {
    title: string,
    bgcolor: string,
    txtColor: string,
    btnProps: TouchableOpacityProps,
    width: number | string
}
const Btn1 = ({ title, bgcolor, txtColor, btnProps, width }: props) => {
    return (
        <TouchableOpacity style={[styles.btn, { width, backgroundColor: bgcolor }]} {...btnProps}>
            <Text style={[styles.txt, { color: txtColor }]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Btn1

const styles = StyleSheet.create({
    btn: {
        borderRadius: SIZES.btnRadius,
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding2,
        justifyContent: "center",
        alignItems: "center"
    },
    txt: {
        ...FONTS.body4
    }
})