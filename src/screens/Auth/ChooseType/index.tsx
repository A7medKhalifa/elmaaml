import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Admin, Logo, User } from "../../../assets";
import CoustomButton from "../../../components/Button";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../../../values/colors";
import Type from "../../../components/Type";
const ChooseTypeScreen = () => {
    const { navigate } = useNavigation<any>()
    const [index, setindex] = useState(1)
    const [Sindex, setSindex] = useState(0)
    return (
        <>
            <SafeAreaView style={styles.Container}>
                <View style={{ height: 10, marginTop: -50 }} />
                <Text style={{
                    fontSize: 30,
                    fontWeight: '600',
                    color: COLORS.green,
                    marginTop: 15
                }}>تسجيل دخول</Text>
                <Type index={index} Setindex={setindex} />

                <View style={{ height: 10, marginTop: -50 }} />
                <CoustomButton
                    loading={false}
                    Title="تأكيد"
                    style={{
                        marginBottom: 50,
                    }}
                    onpress={() => navigate(index == 0 ? 'AdminLogin' : 'Login')}
                />
            </SafeAreaView>
        </>
    )
}

export default ChooseTypeScreen;