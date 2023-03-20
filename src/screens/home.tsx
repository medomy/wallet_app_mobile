import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS } from '../constants'
import { useFetchUserData } from '../hooks/useFetchUserData'
import LoaderComponent from '../components/loaderComponent/loaderComponent'
import InfoPart from '../components/homeComponents/infoPart/infoPart'
import { useFetchTransactedUsers } from '../hooks/useFetchTransactedUsers'
import QuickSendList from '../components/homeComponents/quickSendList/quickSendList'

const HomeScreen = () => {
    const { user, setRefreshed, loading, errMessage } = useFetchUserData();
    const { transactedUsers } = useFetchTransactedUsers(user);
    useEffect(() => {
        console.log(loading)
    }, [loading])
    return (
        <>
            <StatusBar backgroundColor={COLORS.tintColor} />
            {loading && <LoaderComponent />}
            {!loading &&
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.screen}>
                    {user && <InfoPart user={user} />}
                    {transactedUsers.length > 0 && <QuickSendList users={transactedUsers} />}
                </ScrollView>}
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