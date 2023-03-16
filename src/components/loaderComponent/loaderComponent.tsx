import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants'

const LoaderComponent = () => {
    return (
        <View style={styles.screen}>
            <ActivityIndicator color={COLORS.tintColor} size={2 * SIZES.iconSize} />
        </View>
    )
}

export default LoaderComponent

const styles = StyleSheet.create({
    screen: {
        width: SIZES.fullScreenWidth,
        height: SIZES.fullScreenHeight,
        opacity: 0.5,
        backgroundColor: COLORS.primary,
        position: "absolute",
        top: 0,
    }
})