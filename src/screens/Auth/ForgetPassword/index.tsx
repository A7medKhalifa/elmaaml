import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import { Logo } from "../../../assets";
import { forget_initial_values } from "../../../forms/initial_values";
import { ForgetSchema } from "../../../forms/schema";
import CustomTextInput from "../../../components/CustomTextinput";
import CoustomButton from "../../../components/Button";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Header from "../../../components/HeaderNoDrawer";
import { useAppDispatch } from "../../../redux/store";
import { forgetPassword } from "../../../redux/Auth/auth.actions";
import { useSelector } from "react-redux";
import { changeloading, changereset, selectLoading, selectforgot } from "../../../redux/Auth";

const ForgetPasswordScreen = () => {
    const { navigate } = useNavigation<any>()
    const dispatch = useAppDispatch()
    const forgot = useSelector(selectforgot)
    const loading = useSelector(selectLoading)
    const [number, setnumber] = useState<any>()

    useEffect(() => {
        dispatch(changeloading(false))
        forgot && navigate('OTP', { number, Type: 'reset' })
        dispatch(changereset(false))
    }, [forgot])
    return (
        <>
            <SafeAreaView style={styles.Container}>
                <Header Title="تغيير الرقم السري" />

                <Image source={Logo} style={styles.Logo} />
                <Text style={styles.AppName}>المعمل</Text>
                <Formik
                    initialValues={forget_initial_values}
                    validationSchema={ForgetSchema}
                    onSubmit={(values) => {
                        dispatch(forgetPassword({
                            phone: values.mobile
                        }))
                    }}>
                    {(props) => (
                        <>
                            <CustomTextInput
                                {...props}
                                name='mobile'
                                Title="رقم الهاتف"
                                placeholder="أدخل رقم الهاتف"
                                values={props.values}
                                keyboardType="decimal-pad"
                                maxLength={11}
                                secure={false}
                            />

                            <CoustomButton
                                loading={loading}
                                onpress={() => {
                                    setnumber(props.values.mobile)
                                    props.handleSubmit()
                                }}
                                Title="إعاده تعيين"
                                style={{
                                    position: 'absolute',
                                    bottom: 50,
                                }}
                            />
                        </>
                    )}
                </Formik>



            </SafeAreaView>
        </>
    )
}

export default ForgetPasswordScreen;