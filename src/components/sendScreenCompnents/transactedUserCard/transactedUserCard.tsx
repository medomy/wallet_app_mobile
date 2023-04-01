import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MobileNumUser, User } from '../../../types/user'
import { COLORS, FONTS, SIZES, iconNamesIon } from '../../../constants'
import UserCard from '../../userCard/userCard'
import Icon from 'react-native-vector-icons/Ionicons'
type props = {
    user: User | MobileNumUser,
    closeCard: (val: null) => void
}
const TransactedUserCard = ({ user, closeCard }: props) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.card}>
                <View style={styles.userPart}>
                    <UserCard user={user} btnProps={{}} dim={60} radius={20} />
                    <View style={styles.userInfoPart}>
                        <Text style={styles.userName} numberOfLines={1}>{user.name}</Text>
                        <Text style={styles.mobile}>{user.mobileNumber}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => {
                    closeCard(null);
                }}>
                    <Icon name={iconNamesIon.close} size={SIZES.iconSize} color={COLORS.darkgray} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TransactedUserCard

const styles = StyleSheet.create({
    cardContainer: {
        width: SIZES.fullWidth,
        paddingHorizontal: SIZES.padding2,
        marginVertical: SIZES.margin,
    },
    card: {
        width: SIZES.fullWidth,
        backgroundColor: COLORS.offBlack,
        paddingVertical: 2.5 * SIZES.padding,
        paddingHorizontal: SIZES.padding,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: SIZES.radius2,
    },
    userPart: {
        flex: 0.8,
        flexDirection: "row",
        alignItems: "center"
    },
    userInfoPart: {
        marginHorizontal: 0.3 * SIZES.margin2,
    },
    userName: {
        ...FONTS.h4,
        color: COLORS.white,
    },
    mobile: {
        ...FONTS.body3,
        color: COLORS.darkgray,
        marginTop: 0.4 * SIZES.margin
    }
})