import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { COLORS, SIZES } from '../../../constants'
import { User } from '../../../types/user'
import InfoHeader from '../infoHeader/infoHeader'
import BalanceSec from '../balanceSec/balanceSec'
import { commonStyles } from '../commonStyles'
import Btn2 from '../btn2/btn2'

type props = {
    user: User
}
const InfoPart = ({ user }: props) => {
    const btnWidth = useRef<number | string>("48%");
    return (
        <View style={styles.container}>
            <InfoHeader userName={user.name} />
            <BalanceSec balance={user.balance} />
            <View style={[styles.btnsWrap, commonStyles.row]}>
                <Btn2 txt='request' txtColor={COLORS.white} bgColor={COLORS.primary} width={btnWidth.current} btnProps={{}} />
                <Btn2 txt='send' txtColor={COLORS.primary} bgColor={COLORS.white} width={btnWidth.current} btnProps={{}} />
            </View>
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
    },
    btnsWrap: {
        paddingHorizontal: SIZES.padding2,
        marginVertical: 2 * SIZES.margin2
    }

})