import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../constants'
import LoginTitle from '../components/LoginComponents/title/loginTitle'
import LoginForm from '../components/LoginComponents/loginForm/loginForm'
import LoaderComponent from '../components/loaderComponent/loaderComponent'

const LoginScreen = () => {
    return (
        <View style={styles.screen}>
            <LoginTitle logoTitle='TRANSFER' />
            <LoginForm />
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    screen: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: COLORS.primary
    }
})