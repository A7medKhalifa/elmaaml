import React, { useEffect } from "react";
import Header from "../../../components/HeaderNoDrawer";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Image, Linking, ScrollView, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { Facebook, Logo, Whatsapp } from "../../../assets";
import { useSelector } from "react-redux";
import { selectLab } from "../../../redux/User";
import { useAppDispatch } from "../../../redux/store";
import { FindLab } from "../../../redux/User/user.actions";

const InformationScreen = () => {
    const { navigate } = useNavigation<any>()
    const dispatch = useAppDispatch()
    const Lab = useSelector(selectLab)
    function startsWithEgyptCountryCode(number: any) {
        const countryCode = "+20";
        return number.startsWith(countryCode);
    }
    useEffect(() => {
        dispatch(FindLab({
            user_name: Lab.user_name
        }))
    }, [])

    // console.log(startsWithEgyptCountryCode('+201323423423'))
    return (
        <>
            <SafeAreaView style={styles.Container}>
                <Header Title={"معلومات عن " + (Lab.name)} />
                {/* <Image source={{}} style={styles.Logo} />
                <Text style={styles.AppName}></Text> */}
                <Text style={styles.WelcomeText}> </Text>
                <Text style={styles.Header}>{Lab?.title}</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.des}>{Lab?.description}</Text>
                </ScrollView>

                <View style={{
                    position: 'absolute',
                    backgroundColor: '#fff',
                    bottom: 20,
                    alignSelf: 'center',
                    width: '100%',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 15,
                        fontWeight: '600',
                        color: '#000',
                        marginBottom: 20,
                        // position: 'absolute',
                        // bottom: 150,
                        alignSelf: 'center'
                    }}>تواصل مع معملك عن طريق</Text>
                    <View style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                        width: '35%',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        {Lab.facebook == null ?
                            null
                            :
                            <TouchableOpacity activeOpacity={.8} onPress={() => { Linking.openURL(Lab.facebook) }}>
                                <Facebook />
                            </TouchableOpacity>
                        }
                        {Lab.whatsApp == null ?
                            null
                            :
                            <TouchableOpacity activeOpacity={.8} onPress={() => { Linking.openURL(`whatsapp://send?phone=${startsWithEgyptCountryCode(Lab.whatsApp) ? Lab.whatsApp : `+2${Lab.whatsApp}`}`) }}>
                                <Whatsapp />
                            </TouchableOpacity>
                        }

                    </View>
                </View>



            </SafeAreaView>
        </>
    )
}
export default InformationScreen