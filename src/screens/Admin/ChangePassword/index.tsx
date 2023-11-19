import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { EditPasswordSchema } from "../../../forms/schema";
import CustomTextInput from "../../../components/CustomTextinput";
import CoustomButton from "../../../components/Button";
import { styles } from "./styles";
import Header from "../../../components/HeaderDrawer";
import { useAppDispatch } from "../../../redux/store";
import { useSelector } from "react-redux";
import { selectLoading, selectChanged } from "../../../redux/Auth";
import { useNavigation } from "@react-navigation/native";
import { EditPasswordAdmin } from "../../../redux/User/user.actions";


const ChangePasswordAdminScreen = () => {
    const navigation = useNavigation<any>()
    const dispatch = useAppDispatch()
    const loading = useSelector(selectLoading)
    const DoneChanged = useSelector(selectChanged)

    useEffect(() => {
        DoneChanged && navigation.navigate("الصفحه الرئيسية")
    }, [DoneChanged])
    return (
        <>
            <SafeAreaView style={styles.Container}>
                <Header Title="تعديل الرقم السري" />
                <KeyboardAwareScrollView showsVerticalScrollIndicator={false}
                    style={styles.KeyboardAwareScrollView}>
                    <Formik
                        initialValues={{
                            oldpassword: '',
                            password: '',
                            confirmPassword: '',
                        }}
                        validationSchema={EditPasswordSchema}
                        onSubmit={(values) => {
                            const formdata: any = new FormData();
                            formdata.append('old_password', values?.oldpassword)
                            formdata.append('password', values?.password)
                            formdata.append('password_confirmation', values?.confirmPassword)
                            dispatch(EditPasswordAdmin(formdata))
                        }}>
                        {(props) => (
                            <>

                                <CustomTextInput
                                    {...props}
                                    name='oldpassword'
                                    Title="الرقم السري القديم"
                                    placeholder="أدخل الرقم السري القديم"
                                    values={props.values}
                                    secure
                                />
                                <CustomTextInput
                                    {...props}
                                    name='password'
                                    Title="الرقم السري الجديد"
                                    placeholder="أدخل الرقم السري الجديد"
                                    values={props.values}
                                    secure
                                />
                                <CustomTextInput
                                    {...props}
                                    name='confirmPassword'
                                    Title="تأكيد الرقم السري الجديد"
                                    placeholder="أدخل تأكيد الرقم السري الجديد"
                                    values={props.values}
                                    secure
                                />
                                <CoustomButton
                                    onpress={() => {
                                        props.handleSubmit()
                                    }}
                                    loading={loading}
                                    Title="تعديل"
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

export default ChangePasswordAdminScreen;