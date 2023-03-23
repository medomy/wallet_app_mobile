import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TransactionAppUsed } from '../../../types/transaction'
import { COLORS, FONTS, SIZES, iconNamesFontAwsome5 } from '../../../constants'
import UserCard from '../../userCard/userCard'
import { transactionDateFormat } from '../../../utils/dateFormat'
import Icon from 'react-native-vector-icons/FontAwesome5'
type props = {
    transaction: TransactionAppUsed
}
const TransactionCard = ({ transaction }: props) => {
    return (
        <TouchableOpacity style={styles.card}>
            <View style={styles.personalContainer}>
                <UserCard user={transaction.transactedUser} dim={30} radius={8} btnProps={{}} />
                <View style={styles.personalInfo}>
                    <Text style={styles.name} numberOfLines={1}>
                        {transaction.transactedUser.name}
                    </Text>
                    <Text style={styles.date}>
                        {transactionDateFormat(transaction.createdAt)}
                    </Text>
                </View>
            </View>
            <View style={styles.moneySec}>
                <Icon name={transaction.recieved! ? iconNamesFontAwsome5.plus : iconNamesFontAwsome5.minus}
                    size={0.75 * SIZES.iconSize2}
                    color={COLORS.white}
                    style={styles.sign} />
                <Icon name={iconNamesFontAwsome5.pound}
                    size={1.5 * SIZES.iconSize2}
                    color={COLORS.white}
                />
                <Text style={styles.money}>
                    {transaction.money}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default TransactionCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.offBlack,
        borderRadius: SIZES.radius2,
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding,
        justifyContent: "space-between",
        width: "49%"
    },
    personalContainer: {
        flexDirection: "row",
        alignItems: "flex-start"
    },
    personalInfo: {
        marginLeft: 0.5 * SIZES.margin2
    },
    name: {
        ...FONTS.body3,
        color: COLORS.white
    },
    date: {
        ...FONTS.body4,
        color: COLORS.offWhite,
        marginTop: 0.75 * SIZES.margin
    },
    moneySec: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 3 * SIZES.margin2,
        marginLeft: 0.5 * SIZES.margin
    },
    sign: {
        marginRight: 0.7 * SIZES.margin
    },
    money: {
        ...FONTS.h3,
        color: COLORS.white
    }
})