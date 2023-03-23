import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES, iconNamesFontAwsome5 } from '../../../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'
const SendHeader = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name={iconNamesFontAwsome5.back} size={SIZES.iconSize} color={COLORS.white} />
            </TouchableOpacity>
        </View>
    )
}

export default SendHeader

const styles = StyleSheet.create({
    container: {
        width: SIZES.fullWidth,
        paddingHorizontal: SIZES.padding2,
        flexDirection: "row",
        marginVertical: 1.5 * SIZES.margin2
    }
})