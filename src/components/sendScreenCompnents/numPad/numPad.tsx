import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { NumPadElement } from '../../../types/numBad'
import { SIZES } from '../../../constants'
import NumBadBtn from '../numPadBtns/numPadBtn'

type props = {
    passVal: (val: string) => void
}
const NumPad = ({ passVal }: props) => {
    const numpadElements = useRef<NumPadElement[][]>([
        [
            {
                val: "1",
                isDelete: false
            },
            {
                val: "2",
                isDelete: false
            },
            {
                val: "3",
                isDelete: false
            },
        ], [
            {
                val: "4",
                isDelete: false
            },
            {
                val: "5",
                isDelete: false
            },
            {
                val: "6",
                isDelete: false
            },
        ], [
            {
                val: "7",
                isDelete: false
            },
            {
                val: "8",
                isDelete: false
            },
            {
                val: "9",
                isDelete: false
            },
        ], [
            {
                val: "0",
                isDelete: false
            },
            {
                val: ".",
                isDelete: false
            },
            {
                val: "d",
                isDelete: true
            },
        ]
    ])
    return (
        <View style={styles.container}>
            {numpadElements.current.map((row) => (
                <View style={styles.numpadRow} key={row[0].val}>
                    {row.map((element) => (
                        <NumBadBtn element={element} key={element.val} passVal={(val) => passVal(val)} />
                    ))}
                </View>
            ))}
        </View>
    )
}

export default NumPad

const styles = StyleSheet.create({
    numpadRow: {
        width: SIZES.fullWidth,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 2 * SIZES.margin2
    },
    container: {
        paddingHorizontal: 5 * SIZES.padding
    }
})