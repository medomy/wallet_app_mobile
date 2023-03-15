import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../../../constants'

type props = {
    logoTitle: string
}
const LoginTitle = ({ logoTitle }: props) => {
    return (
        <Text style={styles.logo}>
            {logoTitle}
        </Text>
    )
}

export default LoginTitle

const styles = StyleSheet.create({
    logo: {
        ...FONTS.logo,
        color: COLORS.tintColor,
        fontWeight: Platform.OS === "android" ? undefined : "bold",
    }
})