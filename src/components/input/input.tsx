import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'

type props = {
    inputProps: TextInputProps,
    label: string
}
const CustomInput = ({ inputProps, label }: props) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}:</Text>
            <TextInput
                {...inputProps}
                style={styles.input}
            />
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    inputContainer: {
        width: SIZES.fullWidth,
        marginVertical: SIZES.margin2
    },
    input: {
        marginTop: 0.5 * SIZES.margin,
        borderRadius: SIZES.radius2,
        backgroundColor: COLORS.transparent,
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding2,
        borderColor: COLORS.tintColor,
        color: COLORS.white,
        textAlign: "left",
        borderWidth: 1
    },
    label: {
        ...FONTS.body3,
        color: COLORS.white
    }
})