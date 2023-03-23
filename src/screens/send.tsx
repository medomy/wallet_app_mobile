import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { COLORS } from '../constants'
import SendHeader from '../components/sendScreenCompnents/sendHeader/sendHeader'
import { RouteProp, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '../types/navigation'
import TransactedUserCard from '../components/sendScreenCompnents/transactedUserCard/transactedUserCard'
import TransactedUserForm from '../components/sendScreenCompnents/transactedUserForm/transactedUserForm'
import { MobileNumUser, User } from '../types/user'

type SendScreenParamsType = RouteProp<RootStackParamList, "Send">
const SendScreen = () => {
    const [userMobile, setUserMobile] = useState<string>("");
    const route = useRoute<SendScreenParamsType>();
    const { user } = useMemo(() => {
        return route.params
    }, [route.params])
    const [screenUser, setScreenUser] = useState<User | MobileNumUser | null>(user);
    return (
        <View style={styles.screen}>
            <SendHeader />
            {screenUser !== null ? <TransactedUserCard user={user!} closeCard={(val) => setScreenUser(val)} /> : <TransactedUserForm inputProps={{
                value: userMobile,
                onChangeText(text) {
                    setUserMobile(text);
                },
            }} />}
        </View>
    )
}

export default SendScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.primary
    }
})