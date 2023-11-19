import { Dimensions, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({

    Logo: {
        height: 230,
        width: 150,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    Container:
    {
        flex: 1,
        paddingBottom: 40,
        backgroundColor: '#fff',
    },
    IntroSliderContainer:
    {
        flex: 1,
        alignItems: 'center',
        paddingTop: 35,
        justifyContent: 'space-between'
    },
    Skip:
    {
        position: 'absolute',
        right: 25,
        fontSize: RFValue(16, height)
    },
    Title:
    {
        fontWeight: '700',
        color: 'green',
        fontSize: RFValue(40, height),
        // fontFamily: 'High Speed',
        marginBottom: 15,
        textAlign: 'center'
    },
    Description:
    {
        textAlign: 'center',
        paddingTop: 5,
        fontSize: RFValue(18, height),
        fontWeight: '500',
        color: '#000',
        paddingHorizontal: 15,
        fontFamily: 'futura'
    },
    activeDotStyle:
    {
        backgroundColor: 'green',
        width: 45,
    },
    disactiveDotStyle:
    {
        backgroundColor: '#98bf99',
        width: 13,
    }
})