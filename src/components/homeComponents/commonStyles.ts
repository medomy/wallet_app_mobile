import { StyleSheet } from "react-native";
import { SIZES } from "../../constants";

export const commonStyles = StyleSheet.create({
    opacityShown: {
        opacity: 0.6,
    },
    topMargin: {
        marginTop: 0.5 * SIZES.margin,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.fullWidth
    },
    bottomMargin: {
        marginBottom: 0.5 * SIZES.margin
    }
})