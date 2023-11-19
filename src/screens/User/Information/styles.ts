import { StyleSheet } from "react-native";
import COLORS from "../../../values/colors";

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: 0,
        paddingHorizontal: 20
    },
    Logo: {
        height: 100,
        width: 150,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    AppName: {
        textAlign: "center",
        fontSize: 35,
        fontWeight: "bold",
        color: COLORS.green,
    },
    WelcomeText: {
        textAlign: "center",
        fontSize: 35,
        color: COLORS.black,
    },
    Header: {
        textAlign: "right",
        fontSize: 25,
        fontWeight: "bold",
        color: COLORS.green,
        marginBottom: 30,
    },
    des: {
        textAlign: "right",
        fontSize: 18,
        fontWeight: "bold",
        color: COLORS.black,
    },
})