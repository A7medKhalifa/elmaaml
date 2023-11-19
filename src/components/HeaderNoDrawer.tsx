import React from "react";
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import COLORS from "../values/colors";
import { LeftArrow, LogoL } from "../assets";
import { useNavigation } from "@react-navigation/native";

const Header = ({
    Title,
    onpress,
    Logoo
}: {
    Title?: string
    onpress?: any
    Logoo?: boolean
}) => {
    const { goBack } = useNavigation<any>()
    return (
        <>
            <View style={styles.Container}>
                {!Logoo ? <Image source={LogoL} style={styles.Logo} /> : <View style={{ width: 25 }} />}
                <Text style={styles.Header}>{Title}</Text>
                <TouchableOpacity style={{ transform: [{ rotate: '180deg' }], width: 60, alignItems: 'center' }} activeOpacity={.8} onPress={onpress ? onpress : () => goBack()}>
                    <LeftArrow />
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Header;


const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        height: 50,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: Platform.OS == 'ios' ? 0 : 15
    },
    Header: {
        fontSize: 17,
        fontWeight: '700',
        color: COLORS.green,
        flexWrap: 'wrap',
        width: '70%',
        textAlign: 'center'
    },
    Logo: {
        height: 60,
        width: 60,
        borderRadius: 100,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
})
