import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'
import { commonStyles } from '../commonStyles'

type props = {
    title: string
}
const SecHeader = ({ title }: props) => {
    return (
        <View style={[commonStyles.row, { marginVertical: SIZES.margin }]}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity>
                <Text style={styles.txt}>
                    view more
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SecHeader

const styles = StyleSheet.create({
    title: {
        ...FONTS.h3,
        color: COLORS.white
    },
    txt: {
        ...FONTS.body4,
        color: COLORS.offWhite
    }
})