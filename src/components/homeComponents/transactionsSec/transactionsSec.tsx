import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SIZES } from '../../../constants'
import { TransactionAppUsed } from '../../../types/transaction'
import SecHeader from '../secHeader/secHeader'
import TransactionCard from '../transactionCard/transactionCard'

type props = {
    transactions: TransactionAppUsed[]
}
const TransactionsSec = ({ transactions }: props) => {
    return (
        <View style={styles.container}>
            <SecHeader title='history' />
            <View style={styles.transactionsContainer}>
                {transactions.map((transaction) => (
                    <TransactionCard key={transaction.createdAt.toString()} transaction={transaction} />
                ))}
            </View>
        </View>
    )
}

export default TransactionsSec

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SIZES.padding2,
        width: SIZES.fullWidth,
        marginVertical: 2 * SIZES.margin2
    },
    transactionsContainer: {
        marginTop: SIZES.margin,
        width: SIZES.fullWidth,
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between"
    }
})