import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { EditProfileSchema } from "../../../forms/schema";
import CustomTextInput from "../../../components/CustomTextinput";
import CoustomButton from "../../../components/Button";
import { styles } from "./styles";
import Header from "../../../components/HeaderNoDrawer";
import CustomCalenderInput from "../../../components/CustomCalenderInput";
import Dropdown from "../../../components/DropDown";
import { useAppDispatch } from "../../../redux/store";
import { Register } from "../../../redux/Auth/auth.actions";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ImagePlaceHolder } from "../../../HF/HF";
import ChooseCamera from "../../../components/ChooseCamera";
import { useSelector } from "react-redux";
import { selectLoading, selectUserData, selectChanged, logout, changeIntroStatus, changeAuth } from "../../../redux/Auth";
import { useNavigation } from "@react-navigation/native";
import { EditProfile, deleteProfile, getProfile } from "../../../redux/User/user.actions";
import ReactNativeModal from "react-native-modal";
import { changeFindLab, changeLab, logoutUser, selectdeleteloading } from "../../../redux/User";

const ChangeProfileScreen = () => {
    const navigation = useNavigation<any>()
    const dispatch = useAppDispatch()
    const loading = useSelector(selectLoading)
    const loadingg = useSelector(selectdeleteloading)
    const DoneChanged = useSelector(selectChanged)
    const user = useSelector(selectUserData)
    const [CalenderShow, setCalenderShow] = useState(false)
    const [ModalShow, setModalShow] = useState(false)
    const [Modal, setModal] = useState(false)
    const [visible, setvisible] = useState(false)
    const [Avatar, setAvatar] = useState<any>(null)

    useEffect(() => {
        const RenderFunction = navigation.addListener('focus', () => {
            dispatch(getProfile(''))
        })
        return RenderFunction
    }, [navigation])

    useEffect(() => {
        DoneChanged && navigation.navigate("الصفحه الرئيسية")
    }, [DoneChanged])
    return (
        <>
            <SafeAreaView style={styles.Container}>
                <KeyboardAwareScrollView showsVerticalScrollIndicator={false}
                    style={styles.KeyboardAwareScrollView}>
                    <ChooseCamera setImage={setAvatar} ModalShow={visible} setModalShow={setvisible} />
                    <Formik
                        initialValues={{
                            Name: user?.name as string,
                        }}
                        enableReinitialize={true}
                        validationSchema={EditProfileSchema}
                        onSubmit={(values) => {
                            const formdata: any = new FormData();
                            formdata.append('id', user?.id)
                            formdata.append('phone_number', user?.Phone_number)
                            formdata.append('name', values.Name)
                            formdata.append('date_of_birth', '2022-09-07')
                            formdata.append('gender', 'male')
                            {
                                Avatar &&
                                    formdata.append('photo', {
                                        uri: Avatar?.assets[0]?.uri,
                                        type: Avatar?.assets[0]?.type,
                                        name: Avatar?.assets[0]?.uri,
                                    })
                            }
                            dispatch(EditProfile(formdata))
                        }}>
                        {(props) => (
                            <>
                                <Header onpress={() => {
                                    navigation.goBack()
                                    props.resetForm()
                                }} Title="تعديل الحساب" />
                                <TouchableOpacity onPress={() => { setvisible(true) }}>
                                    <Image source={{ uri: Avatar?.assets[0]?.uri ? Avatar?.assets[0]?.uri : (user?.photo ? user?.photo : ImagePlaceHolder) }} style={{
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
                                {/* <CustomCalenderInput
                                    {...props}
                                    name='Date'
                                    Title="تاريخ الميلاد"
                                    placeholder="أختر تاريخ الميلاد"
                                    values={props.values}
                                    keyboardType="decimal-pad"
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
                                <Text onPress={() => {
                                    setModal(true)
                                }} style={{
                                    fontSize: 16,
                                    fontWeight: '600',
                                    textAlign: 'center',
                                    marginTop: 10,
                                    textDecorationLine: 'underline',
                                    color: 'red'
                                }}>حذف الحساب</Text>
                                <CoustomButton
                                    onpress={() => {
                                        props.handleSubmit()
                                    }}
                                    loading={loading}
                                    Title="تعديل الحساب"
                                    style={{
                                        marginVertical: 50,
                                    }}
                                />
                            </>
                        )}
                    </Formik>
                </KeyboardAwareScrollView>
            </SafeAreaView>
            <ReactNativeModal isVisible={Modal}>
                <View style={{
                    paddingVertical: 30,
                    width: '100%',
                    backgroundColor: '#fff',
                    borderRadius: 20,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '900',
                        textAlign: 'center',
                        color: '#000',
                    }}>هل انت متأكد من حذف حسابك </Text>
                    <Text style={{ fontWeight: '600', marginTop: 30, color: '#000', textAlign: 'center' }}>(في حاله حذف الحساب سيتم حذف جميع البيانات الخاصه بيك ولا تستطيع استعادتها مره اخري)</Text>
                    <CoustomButton
                        onpress={() => {
                            dispatch(deleteProfile('')).then(() => {
                                setModal(false);
                                setTimeout(() => {
                                    dispatch(changeLab(''))
                                    dispatch(changeFindLab(false))
                                    dispatch(changeAuth(false))
                                    dispatch(logoutUser())
                                    dispatch(changeIntroStatus(true))
                                }, 500);
                            })
                        }}
                        loading={loadingg}
                        Title="حذف الحساب"
                        style={{
                            marginTop: 30,
                            width: '90%',
                            backgroundColor: '#f00'
                        }}
                    />
                    <CoustomButton
                        onpress={() => {
                            setModal(false)
                            // props.handleSubmit()
                        }}
                        Title="الغاء"
                        style={{
                            marginTop: 20,
                            width: '90%'
                        }}
                    />
                </View>
            </ReactNativeModal>
        </>
    )
}

export default ChangeProfileScreen;