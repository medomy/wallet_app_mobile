import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useCallback, useEffect, useRef } from 'react'
import { COLORS, SIZES, iconNamesMaterial } from '../../../constants'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Swiper = () => {
    const opacities1 = useRef([1, 0.5, 0.25]);
    const opacities2 = useRef([0.5, 1, 0.25]);
    const opacities3 = useRef([0.25, 0.5, 1]);
    const opacity1 = useRef(new Animated.Value(opacities1.current[0])).current;
    const opacity2 = useRef(new Animated.Value(opacities2.current[0])).current;
    const opacity3 = useRef(new Animated.Value(opacities3.current[0])).current;
    const changeArrowsOpacity = useCallback(() => {
        let i = 0;
        return setInterval(() => {
            Animated.timing(opacity1, {
                toValue: opacities1.current[i],
                duration: 250,
                useNativeDriver: true
            }).start()
            Animated.timing(opacity2, {
                toValue: opacities2.current[i],
                duration: 250,
                useNativeDriver: true
            }).start()
            Animated.timing(opacity3, {
                toValue: opacities3.current[i],
                duration: 250,
                useNativeDriver: true
            }).start()
            i += 1;
            if (i == opacities1.current.length) i = 0;
        }, 400)
    }, []);

    useEffect(() => {
        const interval = changeArrowsOpacity();
        return () => clearInterval(interval);
    }, [])
    return (
        <View style={styles.container}>
            <Animated.View style={{ opacity: opacity1 }}>
                <Icon name={iconNamesMaterial.arrowRight} size={0.75 * SIZES.iconSize2} color={COLORS.white} />
            </Animated.View>
            <Animated.View style={{ opacity: opacity2 }}>
                <Icon name={iconNamesMaterial.arrowRight} size={0.75 * SIZES.iconSize2} color={COLORS.white} />
            </Animated.View>
            <Animated.View style={{ opacity: opacity3 }}>
                <Icon name={iconNamesMaterial.arrowRight} size={0.75 * SIZES.iconSize2} color={COLORS.white} />
            </Animated.View>
        </View>
    )
}

export default Swiper

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: "90%",
        borderRadius: 10,
        backgroundColor: COLORS.tintColor,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
        top: 4,
        zIndex: 100,
        left: 4
    }
})