import React from "react";
import Header from "../../../components/HeaderNoDrawer";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Image, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import { Logo } from "../../../assets";
import CustomTextInput from "../../../components/CustomTextinput";
import { Formik } from "formik";
import * as Yup from 'yup';
import CoustomButton from "../../../components/Button";
import { useSelector } from "react-redux";
import { selectAdminData, selectLoading } from "../../../redux/Auth";
import { useAppDispatch } from "../../../redux/store";
import { editFactory } from "../../../redux/Auth/auth.actions";



const InformationScreen = () => {
    const { navigate } = useNavigation<any>()
    const Admin = useSelector(selectAdminData)
    const Loading = useSelector(selectLoading)
    const dispatch = useAppDispatch()
    return (
        <>
            <SafeAreaView style={styles.Container}>
                <Header Title={"معلومات عن " + (Admin.data_of_factory?.name)} />
                {/* <Image source={Logo} style={styles.Logo} /> */}
                <Text style={styles.AppName}>المعمل</Text>
                <Text style={styles.WelcomeText}> </Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Formik
                        initialValues={{
                            name: Admin?.data_of_factory?.name,
                            title: Admin?.data_of_factory?.title,
                            describe: Admin?.data_of_factory?.description,
                            facebook: Admin?.data_of_factory?.facebook,
                            whatsApp: Admin?.data_of_factory?.whatsApp
                        }}
                        validationSchema={Yup.object().shape({
                            name: Yup.string().required("من فضلك ادخل اسم المعمل"),
                            title: Yup.string().required("من فضلك ادخل العنوان "),
                            describe: Yup.string().required("من فضلك ادخل رقم الوصف"),
                            facebook: Yup.string().required("من فضلك ادخل لينك الفيسبوك"),
                            whatsApp: Yup.string().required("من فضلك ادخل رقم الواتساب")
                        })}
                        onSubmit={(values) => {
                            dispatch(editFactory({
                                user_name: Admin?.data_of_factory?.user_name,
                                name: values.name,
                                title: values.title,
                                description: values.describe,
                                facebook: values.facebook,
                                whatsApp: values.whatsApp
                            }))
                        }}>
                        {(props) => (
                            <>
                                <CustomTextInput
                                    {...props}
                                    name='name'
                                    Title="اسم المعمل"
                                    placeholder="أدخل أسم المعمل"
                                    values={props.values}
                                    maxLength={20}
                                />
                                <CustomTextInput
                                    {...props}
                                    name='title'
                                    Title="اسم الموضوع"
                                    placeholder="أدخل أسم الموضوع"
                                    values={props.values}
                                />

                                <CustomTextInput
                                    {...props}
                                    name='describe'
                                    Title="الوصف"
                                    placeholder="أدخل الوصف"
                                    values={props.values}
                                    multiline
                                />
                                <CustomTextInput
                                    {...props}
                                    name='facebook'
                                    Title="لينك الفيسبوك"
                                    placeholder="أدخل لينك الفيسبوك"
                                    values={props.values}
                                />
                                <CustomTextInput
                                    {...props}
                                    name='whatsApp'
                                    Title="رقم واتساب"
                                    placeholder="أدخل رقم الواتساب"
                                    values={props.values}
                                />
                                <CoustomButton
                                    loading={Loading}
                                    onpress={() => { props.handleSubmit() }}
                                    Title="تعديل"
                                    style={{
                                        alignSelf: 'center',
                                        marginTop: 30,
                                    }}
                                />
                            </>
                        )}
                    </Formik>
                </ScrollView>


            </SafeAreaView>
        </>
    )
}
export default InformationScreen