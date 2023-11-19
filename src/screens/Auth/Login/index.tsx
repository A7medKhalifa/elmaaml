import React, { useEffect, useState } from "react";
import { Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { Logo } from "../../../assets";
import { login_initial_values } from "../../../forms/initial_values";
import { LoginSchema } from "../../../forms/schema";
import CustomTextInput from "../../../components/CustomTextinput";
import CoustomButton from "../../../components/Button";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "../../../redux/store";
import { Login } from "../../../redux/Auth/auth.actions";
import { useSelector } from "react-redux";
import { changeloading, changereset, selectLoading, selectforgot } from "../../../redux/Auth";

const LoginScreen = () => {
    const { navigate } = useNavigation<any>()
    const navigation = useNavigation<any>()
    const dispatch = useAppDispatch()
    const loading = useSelector(selectLoading)
    const forgot = useSelector(selectforgot)
    const [number, setnumber] = useState<any>()

    useEffect(() => {
        forgot && navigate('OTP', { number, Type: 'verify' })
        const RenderFunction = navigation.addListener('focus', () => {
            dispatch(changereset(false))
            dispatch(changeloading(false))
        })
        return RenderFunction
    }, [navigation,forgot])
    return (
        <>
            <SafeAreaView style={styles.Container}>
                <KeyboardAwareScrollView showsVerticalScrollIndicator={false}
                    style={{ height: '100%', width: '100%' }}>

                    <Image source={Logo} style={styles.Logo} />
                    <Text style={styles.AppName}>المعمل</Text>
                    <Text style={styles.WelcomeText}> </Text>

                    <Formik
                        initialValues={login_initial_values}
                        validationSchema={LoginSchema}
                        onSubmit={(values) => {
                            console.warn(Login)
                            dispatch(Login({
                                phone_number: values.mobile,
                                password: values.password
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
                                <CustomTextInput
                                    {...props}
                                    name='password'
                                    Title="الرقم السري"
                                    placeholder="أدخل الرقم السري"
                                    values={props.values}
                                    secure
                                />
                                {/* <Text onPress={() => { navigate('ForgetPassword') }} style={styles.ForgetPassword}>هل نسيت الرقم السري !</Text> */}

                                <CoustomButton
                                    onpress={() => {
                                        props.handleSubmit()
                                        setnumber(props.values.mobile)
                                    }}
                                    loading={loading}
                                    Title="تسجيل دخول"
                                    style={{
                                        marginVertical: 50,
                                    }}
                                />
                                <Text onPress={() => { navigate('SignUp') }} style={styles.Create}>إنشاء حساب جديد</Text>
                            </>
                        )}
                    </Formik>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </>
    )
}

export default LoginScreen;