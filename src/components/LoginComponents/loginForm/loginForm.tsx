import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../../../constants'
import CustomInput from '../../input/input';
import Btn1 from '../../btn1/btn1';

const LoginForm = () => {
    const [formVals, setFormVals] = useState({
        mobile: "",
        password: ""
    });
    const setMobile = (val: string) => {
        setFormVals({
            ...formVals,
            mobile: val
        })
    }
    const setPassword = (val: string) => {
        setFormVals({
            ...formVals,
            password: val
        })
    }
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <CustomInput
                    label='mobile number'
                    inputProps={{
                        placeholder: "enter your mobile ",
                        keyboardType: "numeric",
                        maxLength: 11,
                        value: formVals.mobile,
                        onChangeText: setMobile,
                        placeholderTextColor: COLORS.white,
                    }}
                />
            </KeyboardAvoidingView>
            <KeyboardAvoidingView>
                <CustomInput
                    label='password'
                    inputProps={{
                        placeholder: "enter your password",
                        keyboardType: "numeric",
                        maxLength: 6,
                        value: formVals.password,
                        onChangeText: setPassword,
                        placeholderTextColor: COLORS.white,
                        secureTextEntry: true
                    }} />
            </KeyboardAvoidingView>
            <View style={styles.btnContainer}>
                <Btn1 width={SIZES.fullWidth} title='log in' bgcolor={COLORS.tintColor} txtColor={COLORS.white} btnProps={{
                    onPress: () => console.log(formVals),
                }} />
            </View>
        </View>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    container: {
        marginVertical: 2 * SIZES.margin2,
        width: SIZES.fullWidth,
        paddingHorizontal: SIZES.padding2,
        backgroundColor: COLORS.transparent
    },
    btnContainer: {
        marginVertical: SIZES.margin,
        paddingHorizontal: SIZES.padding2,
        width: SIZES.fullWidth
    }
})