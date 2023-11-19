import { Dimensions, Platform, StyleSheet } from "react-native";
import COLORS from "../../../values/colors";
const { height, width } = Dimensions.get('screen')

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: COLORS.white,
        // alignItems: "center",
        paddingTop: 0,
        // paddingHorizontal: 20
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
    Header: {
        textAlign: 'right',
        color: COLORS.green,
        fontSize: 15,
        fontWeight: '700'
    },
    Image: {
        height: width * .25,
        width: width * .25,
        borderRadius: width * .25,
        resizeMode: 'contain'
    },
    button: {
        alignSelf: 'center',
    }
})