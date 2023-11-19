import { StyleSheet } from "react-native";
import COLORS from "../../../values/colors";

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: "center",
        paddingHorizontal: 20,
        justifyContent:'space-between',
    },
    ForgetPassword: {
        fontSize: 15,
        fontWeight: '500',
        textDecorationLine: 'underline',
        color: COLORS.black,
        alignSelf: 'flex-end'
    },
    Create: {
        fontSize: 15,
        fontWeight: '500',
        textDecorationLine: 'underline',
        color: COLORS.green,
        alignSelf: 'center'
    }
})