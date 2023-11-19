import { Dimensions, Platform, StyleSheet } from "react-native";
import COLORS from "../../values/colors";
const { height, width } = Dimensions.get('screen')

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: "center",
        paddingTop: 20,
        paddingHorizontal: 20
    },
    Header: {
        textAlign: 'right',
        color: COLORS.green,
        fontSize: 15,
        fontWeight: '700'
    },
    KeyboardAwareScrollView: {
        height: '100%',
        width: '100%',
        marginTop: 20
    },
    Lottie: {
        height: 500,
        width: 500,
        marginTop: 20,
        alignSelf:'center'
    },
    Container2: {
        borderWidth: 1.1,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 7,
        width: '100%',
        marginBottom: 20,
        borderColor:COLORS.green
    },
    TextInput: {
        minHeight: height * .035,
        maxHeight: height * .4,
        textAlign: 'right',
        color: COLORS.black,
        fontSize: 14,
        fontWeight: '500',
        paddingTop: Platform.OS == 'android' ? 2 : 0
    },
})