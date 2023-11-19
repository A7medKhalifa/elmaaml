import { StyleSheet } from "react-native";
import COLORS from "../../../values/colors";

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: "center",
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
        marginBottom: 30,
    },
    Lottie: {
        height: 400,
        width: 200,
        marginTop: 20
        // alignSelf: 'center',
    }
})