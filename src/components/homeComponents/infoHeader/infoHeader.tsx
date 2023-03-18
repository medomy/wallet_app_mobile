import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, iconNamesFontAwsome5, iconNamesIon } from '../../../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/Ionicons'
import { commonStyles } from '../commonStyles'

type props = {
    userName: string
}
const InfoHeader = ({ userName }: props) => {
    return (
        <View style={styles.container}>
            <View style={commonStyles.row}>
                <View style={styles.nameSec}>
                    <TouchableOpacity>
                        <Icon2 name={iconNamesIon.drawer} size={1.5 * SIZES.iconSize2} style={commonStyles.opacityShown} color={COLORS.white} />
                    </TouchableOpacity>
                    <View style={styles.greetingSec}>
                        <Text style={[styles.greeting, commonStyles.opacityShown]}>Hello, </Text>
                        <Text style={[styles.greeting, commonStyles.topMargin]}>
                            {userName}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Icon name={iconNamesFontAwsome5.bell} size={SIZES.iconSize} color={COLORS.white} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default InfoHeader

const styles = StyleSheet.create({
    container: {
        marginVertical: 2 * SIZES.margin2,
        paddingHorizontal: SIZES.padding2,
        width: SIZES.fullWidth
    },
    nameSec: {
        flexDirection: "row",
        alignItems: "center",
    },
    greetingSec: {
        marginLeft: 0.4 * SIZES.margin
    },
    greeting: {
        ...FONTS.body3,
        color: COLORS.white
    }
})