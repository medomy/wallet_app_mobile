import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { MobileNumUser, User } from '../../../types/user'
import { ListRenderItem } from 'react-native'
import UserCard from '../../userCard/userCard'
import { SIZES } from '../../../constants'
import SecHeader from '../secHeader/secHeader'
import { FlatList } from 'react-native'

type props = {
    users: (User | MobileNumUser | null)[]
}
const QuickSendList = ({ users }: props) => {
    const listRenderer: ListRenderItem<User | MobileNumUser | null> = useCallback(({ item }) => {
        return (
            <UserCard user={item} dim={80} radius={20} />
        )
    }, [users])
    return (
        <View style={styles.container}>
            <SecHeader title='quick Send' />
            <FlatList
                renderItem={listRenderer}
                data={users}
                keyExtractor={(item) => item?.id ?? "null"}
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false} />
        </View>
    )
}

export default QuickSendList

const styles = StyleSheet.create({
    container: {
        width: SIZES.fullWidth,
        marginVertical: 2 * SIZES.margin2,
        paddingHorizontal: SIZES.padding2
    }
})