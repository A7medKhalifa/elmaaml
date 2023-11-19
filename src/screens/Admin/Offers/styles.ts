import { Dimensions, StyleSheet } from "react-native";
import COLORS from "../../../values/colors";
const { height, width } = Dimensions.get('screen')

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        // paddingHorizontal: 20,
        backgroundColor: COLORS.white,
        paddingTop: 0,
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
    Card: {
        padding: 20,
        width: width * .9,
        backgroundColor: COLORS.white,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 7,
        borderColor: COLORS.green,
        marginBottom: 20,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center',
        marginTop: 4
    },
    circle: {
        height: 40,
        width: 40,
        borderRadius: 50,
        backgroundColor: COLORS.green,
        position: 'absolute',
        right: -15,
        top: -15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    discount: {
        fontSize: 13,
        color: COLORS.white,
        fontWeight: '700'
    },
    OfferImage: {
        height: width * .25,
        borderRadius: 15,
        width: width * .25
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        color: COLORS.green
    },
    ButtonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    },
    ButtonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '600'
    },
    DeleteButton: {
        height: 35,
        width: 80,
        backgroundColor: '#f00',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    description: {
        fontSize: 13,
        fontWeight: '400',
        color: COLORS.black,
        marginTop: 5,
        textAlign: 'right',
        flexWrap: 'wrap',
        marginBottom:50
    },
    TextContainer: {
        paddingRight: 15,
        alignItems: 'flex-end',
        width: width * .49,
    },
    Lottie: {
        height: 320,
        width: 200,
        // alignSelf: 'center',
    }
})