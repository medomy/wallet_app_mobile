import { StyleSheet, Text, View, TextInputProps, TextInput } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../../constants'

type props = {
    inputProps: TextInputProps
}
const TransactedUserForm = ({ inputProps }: props) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.card}>
                <TextInput
                    placeholder='transaction mobile number'
                    maxLength={11}
                    placeholderTextColor={COLORS.white}
                    keyboardType='numeric'
                    cursorColor={COLORS.white}
                    style={styles.input}
                    {...inputProps} />
            </View>
        </View>
    )
}

export default TransactedUserForm

const styles = StyleSheet.create({
    cardContainer: {
        width: SIZES.fullWidth,
        paddingHorizontal: SIZES.padding2,
        marginVertical: SIZES.margin
    },
    card: {
        width: SIZES.fullWidth,
        backgroundColor: COLORS.offBlack,
        paddingVertical: 2.5 * SIZES.padding,
        paddingHorizontal: SIZES.padding,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: SIZES.radius2
    },
    input: {
        paddingVertical: 0.5 * SIZES.padding,
        width: SIZES.fullWidth,
        color: COLORS.white
    }
})