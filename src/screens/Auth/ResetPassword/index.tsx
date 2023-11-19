import React from "react";
import { Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import { Logo } from "../../../assets";
import { resetpass_initial_values } from "../../../forms/initial_values";
import { ResetPassSchema } from "../../../forms/schema";
import CustomTextInput from "../../../components/CustomTextinput";
import CoustomButton from "../../../components/Button";
import { styles } from "./styles";
import Header from "../../../components/HeaderNoDrawer";
import { useAppDispatch } from "../../../redux/store";
import { useSelector } from "react-redux";
import { selectLoading } from "../../../redux/Auth";
import { resetPassword } from "../../../redux/Auth/auth.actions";

const ResetPasswordScreen = (props: any) => {
    const number = props.route.params.number
    const dispatch = useAppDispatch()
    const loading = useSelector(selectLoading)

    return (
        <>
            <SafeAreaView style={styles.Container}>
                <Header Title="تغيير الرقم السري" />

                <Image source={Logo} style={styles.Logo} />
                <Text style={styles.AppName}>المعمل</Text>
                <Formik
                    initialValues={resetpass_initial_values}
                    validationSchema={ResetPassSchema}
                    onSubmit={(values) => {
                        dispatch(resetPassword({
                            password: values.password,
                            password_confirmation: values.confirmPassword,
                            mobile: number
                        }))
                    }}>
                    {(props) => (
                        <>
                            <CustomTextInput
                                {...props}
                                name='password'
                                Title="الرقم السر"
                                placeholder="الرقم السر"
                                values={props.values}
                                secure={true}
                            />

                            <CustomTextInput
                                {...props}
                                name='confirmPassword'
                                Title="تأكيد الرقم السر"
                                placeholder="تأكيد الرقم السر"
                                values={props.values}
                                secure={true}
                            />

                            <CoustomButton
                                loading={loading}
                                onpress={() => {
                                    // setnumber(props.values.confirmPassword)
                                    props.handleSubmit()
                                }}
                                Title="إعاده تعيين"
                                style={{
                                    // position: 'absolute',
                                    top: 120,
                                }}
                            />
                        </>
                    )}
                </Formik>



            </SafeAreaView>
        </>
    )
}

export default ResetPasswordScreen;