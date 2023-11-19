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
    Image: {
        height: 250,
        width: '100%',
        borderRadius: 20,
        marginTop: 15
    },
    button: {
        alignSelf: 'center',
    },
    Lottie: {
        height: 500,
        width: 500,
        marginTop: 20
    }
})