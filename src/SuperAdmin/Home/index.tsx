import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/HeaderDrawer";
import { Text, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import CoustomButton from "../../components/SelectButton";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { changeAdded, changeFindLab, logoutUser, selectFindLab, selectLab } from "../../redux/User";
import { useAppDispatch } from "../../redux/store";
import { changeChanged } from "../../redux/Auth";

const HomeSuperAdmin = () => {
    const { navigate } = useNavigation<any>()
    const navigation = useNavigation<any>()
    const dispatch = useAppDispatch()
    const findLab = useSelector(selectFindLab)
    const Lab = useSelector(selectLab)

    useEffect(() => {
        const RenderFunction = navigation.addListener('focus', () => {
            dispatch(changeAdded(false))
        })
        return RenderFunction
    }, [navigation])

    useEffect(() => {
        (!findLab) && navigate('search')
    }, [findLab])
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: 'white' }}>
                <SafeAreaView style={styles.Container}>
                    <Header Title={'مرحبا بك'} noDrawer />
                    <Text style={styles.AppName}>المعمل</Text>
                    {/* <Image source={{}} style={styles.Logo} /> */}

                    <CoustomButton onpress={() => navigate('Addm3ml')} Title="اضافة معمل" />
                    <CoustomButton onpress={() => navigate('AddAdmin')} Title="اضافة أدمن" />
                    <CoustomButton onpress={() => navigate('ActiveM3ml')} Title="قائمة المعامل" />
                    <CoustomButton onpress={() => navigate('ChangePassword')} Title="استعادة حساب أدمن" />
                    <CoustomButton onpress={() => navigate('ChangePasswordUser')} Title="استعادة حساب يوزر" />

                    {/* <Text onPress={() => {
                        dispatch(changeFindLab(false))
                        dispatch(logoutUser())
                    }} style={styles.LogOut}>تسجيل خروج</Text> */}
                </SafeAreaView>
            </ScrollView>
        </>
    )
}

export default HomeSuperAdmin;