import React, { useEffect } from "react";
import Header from "../../../components/HeaderDrawer";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import CustomTextInput from "../../../components/CustomTextinput";
import CoustomButton from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { SearchSchema } from "../../../forms/schema";
import { search_initial_values } from "../../../forms/initial_values";
import { Dimensions, Image, View } from "react-native";
import { Text } from "react-native-paper";
import { Logo } from "../../../assets";
import { useAppDispatch } from "../../../redux/store";
import { FindLab } from "../../../redux/User/user.actions";
import { useSelector } from "react-redux";
import { selectFindLab, selectLoading } from "../../../redux/User";
const { height } = Dimensions.get('screen')
const SearchScreen = () => {
    const { navigate } = useNavigation<any>()
    const dispatch = useAppDispatch()
    const findLab = useSelector(selectFindLab)
    const loading = useSelector(selectLoading)

    // useEffect(() => {
    //     findLab && navigate('SelectService')
    // }, [findLab])
    return (
        <>
            <SafeAreaView style={styles.Container}>
                <Header Title="البحث" />
                <Image source={Logo} style={styles.Logo} />
                <Text style={styles.AppName}>المعمل</Text>
                <Formik
                    initialValues={search_initial_values}
                    validationSchema={SearchSchema}
                    onSubmit={(values) => {
                        dispatch(FindLab({
                            user_name: values.search
                        }))
                    }}>
                    {(props) => (
                        <>
                            <View style={{
                                height: height * .5,
                                width: '100%',
                                justifyContent: 'space-between'
                            }}>
                                <CustomTextInput
                                    {...props}
                                    name='search'
                                    Title="أسم المعمل"
                                    placeholder="أدخل أسم المعمل (المسلم من صاحب المعمل)"
                                    values={props.values}
                                />

                                <CoustomButton
                                    loading={loading}
                                    onpress={() => { props.handleSubmit() }}
                                    Title="بحث"
                                />
                            </View>

                        </>
                    )}
                </Formik>

            </SafeAreaView>
        </>
    )
}
export default SearchScreen