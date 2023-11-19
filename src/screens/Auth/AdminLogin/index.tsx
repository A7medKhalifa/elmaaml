import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { Logo } from "../../../assets";
import { login_initial_values } from "../../../forms/initial_values";
import { LoginASchema } from "../../../forms/schema";
import CustomTextInput from "../../../components/CustomTextinput";
import CoustomButton from "../../../components/Button";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "../../../redux/store";
import { LoginAdmin } from "../../../redux/Auth/auth.actions";
import { useSelector } from "react-redux";
import { changeNoActive, changeloading, selectLoading, selectNoActive } from "../../../redux/Auth";
import ReactNativeModal from "react-native-modal";

const AdminLoginScreen = () => {
    const { navigate } = useNavigation<any>()
    const dispatch = useAppDispatch()
    const loading = useSelector(selectLoading)
    const noActive = useSelector(selectNoActive)
    const [ModalVisibility, setModalVisibility] = React.useState(false)

    useEffect(() => {
        dispatch(changeloading(false))
        noActive && setModalVisibility(true)
    }, [noActive])

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
                        validationSchema={LoginASchema}
                        onSubmit={(values) => {
                        }}>
                        {(props) => (
                            <>
                                <CustomTextInput
                                    {...props}
                                    name='mobile'
                                    Title="اليوزر نيم"
                                    placeholder="أدخل اليوزر نيم"
                                    values={props.values}
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
                                        dispatch(LoginAdmin({
                                            name: props.values.mobile,
                                            password: props.values.password
                                        }))
                                    }}
                                    loading={loading}
                                    Title="تسجيل دخول"
                                    style={{
                                        marginVertical: 50,
                                    }}
                                />
                            </>
                        )}
                    </Formik>
                </KeyboardAwareScrollView>

                <ReactNativeModal
                    onBackButtonPress={() => {
                        setModalVisibility(false)
                        dispatch(changeNoActive(false))
                    }}
                    onBackdropPress={() => {
                        setModalVisibility(false)
                        dispatch(changeNoActive(false))
                    }}
                    isVisible={ModalVisibility}
                    style={{ alignItems: 'center', justifyContent: 'center' }}
                >
                    <View style={{
                        padding: 25,
                        backgroundColor: '#fff',
                        width: '100%',
                        borderRadius: 15
                    }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: '700',
                            color: '#000',
                            textAlign: 'center'
                        }}>برجاء التواصل معنا لتجديد الإشتراك حتي تتمكن من متابعه معملك معنا</Text>
                        <CoustomButton
                            onpress={() => {
                                setModalVisibility(false)
                                dispatch(changeNoActive(false))
                            }}
                            loading={loading}
                            Title=" حسنا"
                            style={{
                                marginTop: 30,
                            }}
                        />
                    </View>
                </ReactNativeModal>
            </SafeAreaView>
        </>
    )
}

export default AdminLoginScreen;