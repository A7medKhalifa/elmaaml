import React from "react";
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import COLORS from "../values/colors";
import { List, LeftArrow, LogoL } from "../assets";
import { useNavigation } from "@react-navigation/native";

const Header = ({
    Title,
    back,
    noDrawer,
    onPress
}: {
    Title?: string
    back?: boolean
    noDrawer?: boolean
    onPress?: any
}) => {
    const { goBack } = useNavigation<any>()
    const navigation = useNavigation<any>()
    return (
        <>
            <View style={styles.Container}>
                {back ?
                    <TouchableOpacity style={{ width: 60, alignItems: 'center' }} activeOpacity={.8} onPress={() => goBack()}>
                        <LeftArrow />
                    </TouchableOpacity>
                    :
                    <Image source={LogoL} style={styles.Logo} />

                }
                <Text style={styles.Header}>{Title}</Text>
                {!noDrawer ?
                    <TouchableOpacity style={{ transform: [{ rotate: '180deg' }], width: 60, alignItems: 'center' }} activeOpacity={.8}
                        onPress={() => { navigation.openDrawer() }}
                    >
                        <List />
                    </TouchableOpacity>
                    :
                    <View style={{ width: 60 }} />
                }

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
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.green
    },
    Logo: {
        height: 60,
        width: 60,
        borderRadius: 100,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
})
