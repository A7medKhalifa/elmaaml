import { StyleSheet } from "react-native";
import COLORS from "../../../values/colors";

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: "center",
        paddingTop: 20,
        paddingHorizontal: 20
    },
    KeyboardAwareScrollView: {
        height: '100%',
        width: '100%',
        paddingTop: 20,
        marginTop: -30
    }
})