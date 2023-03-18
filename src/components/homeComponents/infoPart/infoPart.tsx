import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../../constants'
import { User } from '../../../types/user'
import InfoHeader from '../infoHeader/infoHeader'
import BalanceSec from '../balanceSec/balanceSec'

type props = {
    user: User
}
const InfoPart = ({ user }: props) => {
    return (
        <View style={styles.container}>
            <InfoHeader userName={user.name} />
            <BalanceSec balance={user.balance} />
        </View>
    )
}

export default InfoPart

const styles = StyleSheet.create({
    container: {
        width: SIZES.fullWidth,
        backgroundColor: COLORS.tintColor,
        borderBottomLeftRadius: SIZES.radius,
        borderBottomRightRadius: SIZES.radius,
        paddingVertical: 2 * SIZES.padding2
    }
})