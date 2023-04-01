import { StyleSheet, Text, View, ScrollView, StatusBar, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../constants'
import { useFetchUserData } from '../hooks/useFetchUserData'
import LoaderComponent from '../components/loaderComponent/loaderComponent'
import InfoPart from '../components/homeComponents/infoPart/infoPart'
import { useFetchTransactedUsers } from '../hooks/useFetchTransactedUsers'
import QuickSendList from '../components/homeComponents/quickSendList/quickSendList'
import TransactionsSec from '../components/homeComponents/transactionsSec/transactionsSec'
import { useIsFocused, useRoute } from '@react-navigation/native'

const HomeScreen = () => {
    const { user, getData, loading, errMessage } = useFetchUserData();
    const [refresh, setRefresh] = useState<boolean>(false);
    const { transactedUsers, transactions, loading2 } = useFetchTransactedUsers(user);
    const focused = useIsFocused();
    const onRefresh = async () => {
        await getData();
    }
    useEffect(() => {
        if (focused) {
            console.log("focused:", focused);
            onRefresh();
        }
    }, [focused])
    return (
        <>
            <StatusBar backgroundColor={COLORS.tintColor} />
            {loading || loading2 ? <LoaderComponent /> :
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.screen}
                    refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={refresh} colors={[COLORS.tintColor, COLORS.primary]} />}>
                    {user && <InfoPart user={user} />}
                    {transactedUsers.length > 0 && <QuickSendList users={transactedUsers} />}
                    <TransactionsSec transactions={transactions} />
                </ScrollView>
            }
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    screen: {
        backgroundColor: COLORS.primary,
        flex: 1
    }
})