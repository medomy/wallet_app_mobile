import { ActivityIndicator, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { COLORS, FONTS, SIZES, iconNamesFontAwsome5, iconNamesIon } from '../../../constants';
import { MobileNumUser, User } from '../../../types/user';
import Btn1 from '../../btn1/btn1';
import FontAwsomeIcon5 from 'react-native-vector-icons/FontAwesome5'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import TransactionService from '../../../services/transactions/transactions';

type props = {
    visibleModal: boolean,
    closeModal: (val: boolean) => void,
    transactedUser?: User | MobileNumUser | null,
    transactedMobile?: string,
    transactedMoney: number
}
const TransactionModal = ({ visibleModal, closeModal, transactedUser, transactedMobile, transactedMoney }: props) => {
    const [transactionSuccessful, setTransactionSuccessful] = useState<boolean>(false);
    const [transactionFailed, setTransactionFailed] = useState<boolean>(false);
    const [transactionLoading, setTransactionLoading] = useState<boolean>(false);
    const [transactionError, setTransactionError] = useState<string>("");
    const token = useSelector((state: RootState) => state.user.userToken);
    const currentUser = useSelector((state: RootState) => state.user.user);
    const makeTransaction = useCallback(async () => {
        try {
            setTransactionLoading(true);
            await TransactionService.makeTransaction(token!, {
                toMobile: transactedUser ? transactedUser.mobileNumber : transactedMobile!,
                fromMobile: currentUser!.mobileNumber,
                createdAt: new Date(),
                money: transactedMoney
            })
            setTransactionLoading(false);
            setTransactionSuccessful(true);
        } catch (err: any) {
            setTransactionLoading(false);
            setTransactionFailed(true);
            setTransactionError(err.message);
        }
    }, [])
    return (
        <Modal
            transparent
            visible={visibleModal}
            onRequestClose={() => closeModal(false)}
            animationType='slide'
        >
            <Pressable style={styles.transparentPart} onPress={() => closeModal(false)} />
            <View style={styles.modal}>
                {!transactionSuccessful && !transactionFailed && !transactionLoading &&
                    <>
                        <Text style={styles.sureTxt}>Send money to : </Text>
                        <Text style={styles.txt}>{transactedUser ? transactedUser.mobileNumber : transactedMobile!}</Text>
                        {transactedUser && <Text style={styles.txt}>{transactedUser.name}</Text>}
                        <View style={styles.btnWrap}>
                            <Btn1 title='send' bgcolor={COLORS.tintColor}
                                txtColor={COLORS.white}
                                width={"50%"}
                                btnProps={{
                                    onPress: makeTransaction
                                }} />
                        </View>
                    </>
                }
                {
                    transactionLoading && <ActivityIndicator size={SIZES.h2} color={COLORS.tintColor} />
                }
                {
                    transactionSuccessful && <>
                        <FontAwsomeIcon5 size={1.5 * SIZES.iconSize} color={COLORS.tintColor} name={iconNamesFontAwsome5.check} />
                        <Text style={styles.txt}>transaction done</Text>
                    </>
                }
                {
                    transactionFailed && <>
                        <IonIcon name={iconNamesIon.close} color={COLORS.danger} size={1.5 * SIZES.iconSize} />
                        <Text style={styles.txt}>Error transaction : {transactionError}</Text>
                    </>
                }
            </View>
        </Modal>
    )
}

export default TransactionModal

const styles = StyleSheet.create({
    modal: {
        borderTopRightRadius: SIZES.radius2,
        borderTopLeftRadius: SIZES.radius2,
        paddingHorizontal: SIZES.padding2,
        paddingVertical: SIZES.padding,
        backgroundColor: COLORS.primary,
        alignItems: "center"
    },
    transparentPart: {
        height: 0.75 * SIZES.fullScreenHeight,
        color: COLORS.primary,
        opacity: 0.25
    },
    sureTxt: {
        ...FONTS.h3,
        color: COLORS.white,
        marginVertical: 0.5 * SIZES.margin2
    },
    txt: {
        ...FONTS.body3,
        color: COLORS.white,
        marginVertical: 0.5 * SIZES.margin
    },
    btnWrap: {
        width: SIZES.fullWidth,
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 0.4 * SIZES.margin2
    },
    msgWrap: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})