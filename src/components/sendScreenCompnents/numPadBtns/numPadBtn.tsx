import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, iconNamesFontAwsome5 } from '../../../constants'
import { NumPadElement } from '../../../types/numBad'
import Icon from 'react-native-vector-icons/FontAwesome5'

type props = {
    element: NumPadElement,
    passVal: (val: string) => void
}
const NumBadBtn = ({ element, passVal }: props) => {
    return (
        <TouchableOpacity onPress={() => passVal(element.val)}>
            {element.isDelete
                ? <Icon name={iconNamesFontAwsome5.backspace}
                    size={SIZES.iconSize2}
                    color={COLORS.white} />
                : <Text style={styles.txt}>
                    {element.val}
                </Text>}
        </TouchableOpacity>
    )
}

export default NumBadBtn

const styles = StyleSheet.create({
    btn: {
        width: 60,
        height: 60,
        borderRadius: 15,
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center"
    },
    txt: {
        ...FONTS.body2,
        color: COLORS.white
    }
})