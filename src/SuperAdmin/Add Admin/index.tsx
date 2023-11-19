import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { AddAdminSchema } from "../../forms/schema";
import CustomTextInput from "../../components/CustomTextinput";
import CoustomButton from "../../components/Button";
import { styles } from "./styles";
import Header from "../../components/HeaderNoDrawer";
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { addAdminForm3ml } from "../../redux/User/user.actions";
import { selectAdded, selectLoading } from "../../redux/User";

const AddAdmin = () => {
    const navigation = useNavigation<any>()
    const dispatch = useAppDispatch()
    const loading = useSelector(selectLoading)
    const DoneAdded = useSelector(selectAdded)

    useEffect(() => {
        DoneAdded && navigation.navigate("Home")
    }, [DoneAdded])
    return (
        <>
            <SafeAreaView style={styles.Container}>
                <Header Title="إضافة أدمن جديد" />
                <KeyboardAwareScrollView showsVerticalScrollIndicator={false}
                    style={styles.KeyboardAwareScrollView}>
                    <Formik
                        initialValues={{
                            name: '',
                            mobile: '',
                            confirmPassword: '',
                            password: '',
                        }}
                        validationSchema={AddAdminSchema}
                        onSubmit={(values) => {
                            const formdata: any = new FormData();
                            formdata.append('user_name', values?.name)
                            formdata.append('phone', values?.mobile)
                            formdata.append('password', values?.password)
                            formdata.append('password_confirmation', values?.confirmPassword)

                            dispatch(addAdminForm3ml({
                                user_name: values?.name,
                                phone: values?.mobile,
                                password: values?.password,
                                password_confirmation: values.confirmPassword
                            }))
                        }}>
                        {(props) => (
                            <>
                                <CustomTextInput
                                    {...props}
                                    name='name'
                                    Title="اليوزر نيم للمعمل"
                                    placeholder="أدخل اليوزر نيم"
                                    values={props.values}
                                />
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
                                    Title="كلمة السر"
                                    placeholder="أدخل كلمة السر"
                                    values={props.values}
                                    secure
                                />
                                <CustomTextInput
                                    {...props}
                                    name='confirmPassword'
                                    Title="تأكيد كلمة السر"
                                    placeholder="أدخل تأكيد كلمة السر"
                                    values={props.values}
                                    secure
                                />
                                <CoustomButton
                                    onpress={() => {
                                        props.handleSubmit()
                                        console.log(JSON.stringify(props.errors))
                                    }}
                                    loading={loading}
                                    Title="إضافة"
                                    style={{
                                        marginVertical: 50,
                                    }}
                                />
                            </>
                        )}
                    </Formik>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </>
    )
}

export default AddAdmin;