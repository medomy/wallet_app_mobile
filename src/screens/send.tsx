import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { COLORS } from '../constants'
import SendHeader from '../components/sendScreenCompnents/sendHeader/sendHeader'
import { RouteProp, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '../types/navigation'
import TransactedUserCard from '../components/sendScreenCompnents/transactedUserCard/transactedUserCard'
import TransactedUserForm from '../components/sendScreenCompnents/transactedUserForm/transactedUserForm'
import { MobileNumUser, User } from '../types/user'
import TransactedBalancePart from '../components/sendScreenCompnents/transactedBalance/transactedBalancePart'
import NumPad from '../components/sendScreenCompnents/numPad/numPad'
import SwipeToSendSec from '../components/sendScreenCompnents/swipeToSendSec/swipeToSendSec'
import TransactionModal from '../components/sendScreenCompnents/transactionModal/transactionModal'

type SendScreenParamsType = RouteProp<RootStackParamList, "Send">
const SendScreen = () => {
    const [userMobile, setUserMobile] = useState<string>("");
    const [showModal, setShowModal] = useState<boolean>(false);
    const route = useRoute<SendScreenParamsType>();
    const { user } = useMemo(() => {
        return route.params
    }, [route.params])
    const [screenUser, setScreenUser] = useState<User | MobileNumUser | null>(user);
    const [sentMoney, setSentMoney] = useState<string>("");
    const changeSentMoney = (val: string) => {
        if (val !== "d") {
            setSentMoney((prev) => prev += val);
        }
        else {
            setSentMoney((prev) => prev.substring(0, prev.length - 1));
        }
    }
    useEffect(() => {
        console.log("showModal", showModal);
    }, [showModal])
    return (
        <View style={styles.screen}>
            <SendHeader />
            {screenUser !== null ? <TransactedUserCard user={user!} closeCard={(val) => setScreenUser(val)} /> : <TransactedUserForm inputProps={{
                value: userMobile,
                onChangeText(text) {
                    setUserMobile(text);
                },
            }} />}
            <TransactedBalancePart money={sentMoney} />
            <NumPad passVal={(val) => changeSentMoney(val)} />
            <SwipeToSendSec showModal={(val) => setShowModal(val)} />
            <TransactionModal visibleModal={showModal} closeModal={(val) => setShowModal(val)}
                transactedMoney={Number(sentMoney)}
                transactedUser={screenUser}
                transactedMobile={userMobile} />
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