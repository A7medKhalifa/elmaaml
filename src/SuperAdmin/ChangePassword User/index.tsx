import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { resetAdminSchema } from "../../forms/schema";
import CustomTextInput from "../../components/CustomTextinput";
import CoustomButton from "../../components/Button";
import { styles } from "./styles";
import Header from "../../components/HeaderNoDrawer";
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { changeAdminForm3ml, changeUserForm3ml } from "../../redux/User/user.actions";
import { selectAdded, selectLoading } from "../../redux/User";

const ChangePasswordUserSuperAdmin = () => {
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
                <Header Title="إستعاده حساب يوزر" />
                <KeyboardAwareScrollView showsVerticalScrollIndicator={false}
                    style={styles.KeyboardAwareScrollView}>
                    <Formik
                        initialValues={{
                            name: '',
                            password: '',
                        }}
                        validationSchema={resetAdminSchema}
                        onSubmit={(values) => {
                            dispatch(changeUserForm3ml({
                                phone: values?.name,
                                password: values?.password,
                                password_confirmation: values.password
                            }))
                        }}>
                        {(props) => (
                            <>
                                <CustomTextInput
                                    {...props}
                                    name='name'
                                    Title="رقم اليوزر"
                                    placeholder="أدخل رقم اليوزر"
                                    values={props.values}
                                    keyboardType="decimal-pad"
                                    maxLength={11}
                                />
                                <CustomTextInput
                                    {...props}
                                    name='password'
                                    Title="كلمة السر"
                                    placeholder="أدخل كلمة السر"
                                    values={props.values}
                                    secure
                                />
                                <CoustomButton
                                    onpress={() => {
                                        props.handleSubmit()
                                        console.log(JSON.stringify(props.errors))
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

export default ChangePasswordUserSuperAdmin;