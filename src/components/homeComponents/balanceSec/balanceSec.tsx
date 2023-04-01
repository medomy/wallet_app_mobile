import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, SIZES, iconNamesFontAwsome5 } from '../../../constants'
import { commonStyles } from '../commonStyles'
import Icon from 'react-native-vector-icons/FontAwesome5'

type props = {
    balance: number
}
const BalanceSec = ({ balance }: props) => {
    const [showBalance, setShowBalance] = useState<boolean>(false);
    return (
        <View style={styles.container}>
            <View style={commonStyles.row}>
                <Text style={[styles.txt, commonStyles.opacityShown]}>
                    your total balance,
                </Text>
                <TouchableOpacity onPress={() => setShowBalance((prev) => !prev)}>
                    {showBalance ?
                        <Icon name={iconNamesFontAwsome5.eyeClosed} size={SIZES.iconSize2} color={COLORS.white} style={commonStyles.opacityShown} /> :
                        <Icon name={iconNamesFontAwsome5.eyeOPen} size={SIZES.iconSize2} color={COLORS.white} style={commonStyles.opacityShown} />}
                </TouchableOpacity>
            </View>
            <View style={styles.balanceRow}>
                <Icon name={iconNamesFontAwsome5.pound} size={2 * SIZES.iconSize2} color={COLORS.white} />
                <Text style={styles.balance}>
                    {showBalance ? balance : "******"}
                </Text>
            </View>
        </View>
    )
}

export default BalanceSec

const styles = StyleSheet.create({
    container: {
        width: SIZES.fullWidth,
        paddingHorizontal: SIZES.padding2,
        marginVertical: SIZES.margin
    },
    balance: {
        ...FONTS.h1,
        color: COLORS.white
    },
    txt: {
        ...FONTS.body3,
        color: COLORS.white
    },
    balanceRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: SIZES.margin
    }

})