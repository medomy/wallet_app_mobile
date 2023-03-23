import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, iconNamesFontAwsome5 } from '../../../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
type props = {
    money: string
}
const TransactedBalancePart = ({ money }: props) => {
    return (
        <View style={styles.container}>
            <Icon name={iconNamesFontAwsome5.pound} size={2 * SIZES.iconSize2} color={COLORS.white} />
            <Text style={styles.moneyTxt}>{money}</Text>
        </View>
    )
}

export default TransactedBalancePart

const styles = StyleSheet.create({
    container: {
        marginTop: 3 * SIZES.margin2,
        marginBottom: SIZES.margin,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingVertical: SIZES.padding2,
        height: 120
    },
    moneyTxt: {
        ...FONTS.h1,
        textAlign: "center",
        color: COLORS.white,
        marginLeft: 0.5 * SIZES.margin
    }
})