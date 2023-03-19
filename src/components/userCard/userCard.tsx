import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MobileNumUser, User } from '../../types/user'
import { COLORS, FONTS, SIZES, iconNamesFontAwsome5 } from '../../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'

type props = {
    user: User | null | MobileNumUser,
    dim: number | string,
    radius: number
}
const UserCard = ({ user, dim, radius }: props) => {
    return (
        <>
            {user === null ? <TouchableOpacity
                style={[styles.card, { backgroundColor: COLORS.offBlack, width: dim, height: dim, borderRadius: radius }]}>
                <Icon name={iconNamesFontAwsome5.plus} color={COLORS.white} size={SIZES.iconSize} />
            </TouchableOpacity> : <TouchableOpacity
                style={[styles.card, { backgroundColor: COLORS.tintColor, width: dim, height: dim, borderRadius: radius }]}
            >
                <Text style={styles.txt}>
                    {user.name.charAt(0)}
                </Text>
            </TouchableOpacity>}
        </>
    )
}

export default UserCard

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 0.8 * SIZES.margin
    },
    txt: {
        ...FONTS.body3,
        color: COLORS.white
    }
})