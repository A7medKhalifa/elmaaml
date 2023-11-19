import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { regist_initial_values } from "../../../forms/initial_values";
import { RegistSchema } from "../../../forms/schema";
import CustomTextInput from "../../../components/CustomTextinput";
import CoustomButton from "../../../components/Button";
import { styles } from "./styles";
import Header from "../../../components/HeaderNoDrawer";
import CustomCalenderInput from "../../../components/CustomCalenderInput";
import Dropdown from "../../../components/DropDown";
import { useAppDispatch } from "../../../redux/store";
import { Register } from "../../../redux/Auth/auth.actions";
import { Image, TouchableOpacity } from "react-native";
import { ImagePlaceHolder, downloadFileOnSuccess, isImage } from "../../../HF/HF";
import ChooseCamera from "../../../components/ChooseCamera";
import { useSelector } from "react-redux";
import { selectLoading, selectregisted } from "../../../redux/Auth";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
    const { navigate } = useNavigation<any>()
    const dispatch = useAppDispatch()
    const loading = useSelector(selectLoading)
    const Regist = useSelector(selectregisted)
    const [CalenderShow, setCalenderShow] = useState(false)
    const [ModalShow, setModalShow] = useState(false)
    const [visible, setvisible] = useState(false)
    const [Avatar, setAvatar] = useState<any>(null)
    const [number, setnumber] = useState<any>()

    useEffect(() => {
        Regist && navigate('OTP', { number, Type: 'verify' })
    }, [Regist])
    return (
        <>
            <SafeAreaView style={styles.Container}>
                <Header Title="إنشاء حساب" Logoo />
                <KeyboardAwareScrollView showsVerticalScrollIndicator={false}
                    style={styles.KeyboardAwareScrollView}>
                    <ChooseCamera setImage={setAvatar} ModalShow={visible} setModalShow={setvisible} />
                    <Formik
                        initialValues={regist_initial_values}
                        validationSchema={RegistSchema}
                        onSubmit={(values) => {
                            const formdata: any = new FormData();
                            formdata.append('phone_number', values.mobile)
                            formdata.append('name', values.Name)
                            formdata.append('date_of_birth', '2022-09-07')
                            formdata.append('gender', 'male')
                            formdata.append('password', values.password)
                            formdata.append('password_confirmation', values.confirmPassword)
                            {
                                Avatar &&
                                    formdata.append('photo', {
                                        uri: Avatar?.assets[0]?.uri,
                                        type: Avatar?.assets[0]?.type,
                                        name: Avatar?.assets[0]?.uri,
                                    })
                            }
                            dispatch(Register(formdata))
                        }}>
                        {(props) => (
                            <>
                                <TouchableOpacity onPress={() => { setvisible(true) }}>
                                    <Image source={{ uri: Avatar?.assets[0]?.uri ? Avatar?.assets[0]?.uri : ImagePlaceHolder }} style={{
                                        height: 100,
                                        width: 100,
                                        borderRadius: 100,
                                        alignSelf: 'center',
                                        marginBottom: 50
                                    }} />
                                </TouchableOpacity>

                                <CustomTextInput
                                    {...props}
                                    name='Name'
                                    Title="الإسم (ثلاثي)"
                                    placeholder="أدخل الإسم ثلاثي باللغه العربيه"
                                    values={props.values}
                                    secure={false}
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
                                {/* <CustomCalenderInput
                                    {...props}
                                    name='Date'
                                    Title="تاريخ الميلاد"
                                    placeholder="أختر تاريخ الميلاد"
                                    values={props.values}
                                    CalenderShow={CalenderShow}
                                    setCalenderShow={setCalenderShow}
                                />
                                <Dropdown
                                    {...props}
                                    name='gender'
                                    Title="النوع"
                                    placeholder="أختر النوع"
                                    values={props.values}
                                    ModalShow={ModalShow}
                                    setModalShow={setModalShow}
                                /> */}
                                <CustomTextInput
                                    {...props}
                                    name='password'
                                    Title="الرقم السري"
                                    placeholder="أدخل الرقم السري"
                                    values={props.values}
                                    secure
                                />
                                <CustomTextInput
                                    {...props}
                                    name='confirmPassword'
                                    Title="تأكيد الرقم السري"
                                    placeholder="أدخل تأكيد الرقم السري"
                                    values={props.values}
                                    secure
                                />
                                <CoustomButton
                                    onpress={() => {
                                        setnumber(props.values.mobile)
                                        props.handleSubmit()
                                    }}
                                    loading={loading}
                                    Title="إنشاء حساب"
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

export default SignUpScreen;