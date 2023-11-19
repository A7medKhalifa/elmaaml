import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/HeaderDrawer";
import { Logo } from "../../../assets";
import { Text, Image } from "react-native";
import { styles } from "./styles";
import CoustomButton from "../../../components/SelectButton";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectAdminData } from "../../../redux/Auth";

const SelectServiceScreen = () => {
    const { navigate } = useNavigation<any>()
    const Admin = useSelector(selectAdminData)
    return (
        <>
            <SafeAreaView style={styles.Container}>
                <Header Title={`معمل ${Admin?.data_of_factory?.name}`} />
                {/* <Image source={{}} style={styles.Logo} /> */}
                <Text style={styles.AppName}>المعمل</Text>

                <CoustomButton onpress={() => navigate('Information')} Title="معلومات عن المعمل" />
                <CoustomButton onpress={() => navigate('UserDashboard')} Title="نتائج التحاليل" />
                <CoustomButton onpress={() => navigate('Offers')} Title="العروض" />


            </SafeAreaView>
        </>
    )
}

export default SelectServiceScreen;