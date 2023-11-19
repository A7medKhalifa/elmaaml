import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/HeaderDrawer";
import { Logo } from "../../../assets";
import { Text, Image } from "react-native";
import { styles } from "./styles";
import CoustomButton from "../../../components/SelectButton";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { changeFindLab, logoutUser, selectFindLab, selectLab } from "../../../redux/User";
import { useAppDispatch } from "../../../redux/store";
import { changeChanged } from "../../../redux/Auth";

const SelectServiceScreen = (props: any) => {
    const { navigate } = useNavigation<any>()
    const navigation = useNavigation<any>()
    const dispatch = useAppDispatch()
    const findLab = useSelector(selectFindLab)
    const Lab = useSelector(selectLab)

    useEffect(() => {
        const RenderFunction = navigation.addListener('focus', () => {
            dispatch(changeChanged(false))
        })
        return RenderFunction
    }, [navigation])

    useEffect(() => {
        (!findLab) && navigate('search')
    }, [findLab])
    return (
        <>
            <SafeAreaView style={styles.Container}>
                <Header Title={`معمل ${Lab?.name}`} onPress={() => props.navigation.openDrawer()} />
                <Text style={styles.AppName}>المعمل</Text>
                {/* <Image source={{}} style={styles.Logo} /> */}

                <CoustomButton onpress={() => navigate('Information')} Title="معلومات عن المعمل" />
                <CoustomButton onpress={() => navigate('Results')} Title="نتائج التحاليل" />
                <CoustomButton onpress={() => navigate('Offers')} Title="العروض" />

                <Text onPress={() => {
                    dispatch(changeFindLab(false))
                    dispatch(logoutUser())
                }} style={styles.LogOut}>الخروج من المعمل</Text>
            </SafeAreaView>
        </>
    )
}

export default SelectServiceScreen;