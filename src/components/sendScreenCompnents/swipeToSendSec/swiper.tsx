import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useCallback, useEffect, useRef } from 'react'
import { COLORS, SIZES, iconNamesMaterial } from '../../../constants'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated1, { Easing, runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

type props = {
    showModal : (val : boolean)=> void,
}
const Swiper = ({showModal} : props) => {
    const opacities1 = useRef([1, 0.5, 0.25]);
    const opacities2 = useRef([0.5, 1, 0.25]);
    const opacities3 = useRef([0.25, 0.5, 1]);
    const opacity1 = useRef(new Animated.Value(opacities1.current[0])).current;
    const opacity2 = useRef(new Animated.Value(opacities2.current[0])).current;
    const opacity3 = useRef(new Animated.Value(opacities3.current[0])).current;
    const trnsX = useSharedValue(4);
    const swiperMovingStyle = useAnimatedStyle(() => (
        {
            //transform: [{ translateX: trnsX.value }],
            left: withTiming(trnsX.value, { duration: 100, easing: Easing.linear })
        }
    ))
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

    const swipeEvent = useAnimatedGestureHandler({
        onStart: (event) => {
            console.log("start");
        },
        onActive: (event) => {
            console.log(event.absoluteX);
            trnsX.value = event.absoluteX;
        },
        onEnd(event, context) {
            //if (event.absoluteX > SIZES.fullScreenWidth - 100) trnsX.value = withTiming(4 , {duration : 400});
            //console.log(event.absoluteX);
            if(event.absoluteX >= (SIZES.fullScreenWidth / 2 - 20) || event.velocityX < -1500) runOnJS(showModal)(true);
            else {
                runOnJS(showModal)(false);
            };
            trnsX.value = withTiming(4 , {duration : 400});
        },

    })

    useEffect(() => {
        console.log(SIZES.fullScreenWidth);
        const interval = changeArrowsOpacity();
        return () => clearInterval(interval);
    }, [])
    return (
        <PanGestureHandler onGestureEvent={swipeEvent}>
            <Animated1.View style={[styles.container, swiperMovingStyle]}>
                <Animated.View style={{ opacity: opacity1 }}>
                    <Icon name={iconNamesMaterial.arrowRight} size={0.75 * SIZES.iconSize2} color={COLORS.white} />
                </Animated.View>
                <Animated.View style={{ opacity: opacity2 }}>
                    <Icon name={iconNamesMaterial.arrowRight} size={0.75 * SIZES.iconSize2} color={COLORS.white} />
                </Animated.View>
                <Animated.View style={{ opacity: opacity3 }}>
                    <Icon name={iconNamesMaterial.arrowRight} size={0.75 * SIZES.iconSize2} color={COLORS.white} />
                </Animated.View>
            </Animated1.View>
        </PanGestureHandler>
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