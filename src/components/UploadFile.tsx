import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import COLORS from "../values/colors"
import Modal from "react-native-modal";
import * as Yup from 'yup';
import { Formik } from "formik";
import CustomTextInput from "./CustomTextinput";
import CoustomButton from "./Button";
import { uploadFile } from "../HF/HF";
import { PDF } from "../assets";
import { useAppDispatch } from "../redux/store";
import { AddDocument, ShowAdminResults } from "../redux/User/user.actions";
import { useSelector } from "react-redux";
import { selectLoading, selectUploaded } from "../redux/User";
import { selectAdminData } from "../redux/Auth";


type TInput = {
    ModalShow?: boolean;
    setModalShow?: any
    number?: any
};

const UploadFile = ({
    ModalShow,
    setModalShow,
    number
}: TInput) => {
    // alert(number)
    const [file, setFile] = useState<any>(null)
    const dispatch = useAppDispatch()
    const uploaded = useSelector(selectUploaded)
    const loading = useSelector(selectLoading)
    const Admin = useSelector(selectAdminData)

    useEffect(() => {
        uploaded && (
            setModalShow(false),
            setFile(null)
        )
    }, [uploaded])

    return (
        <>

            <Modal
                isVisible={ModalShow}
                onBackButtonPress={() => {
                    setModalShow(false)
                    setFile(null)
                }}
                onBackdropPress={() => {
                    setModalShow(false)
                    setFile(null)
                }}
                style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <View style={{
                    // flexDirection: 'row',
                    // justifyContent: 'space-around',
                    alignItems: 'center',
                    padding: 20,
                    paddingVertical: 30,
                    width: '100%',
                    backgroundColor: 'white',
                    borderRadius: 20,
                    marginBottom: 20,
                    paddingTop: 30
                }}>
                    <Formik
                        initialValues={{
                            name: ''
                        }}
                        validationSchema={Yup.object().shape({
                            name: Yup.string().required('من فضلك ادخل الاسم'),
                        })}
                        onSubmit={(values) => {
                            const formdata: any = new FormData();
                            formdata.append('title', values?.name);
                            formdata.append('phone', number);
                            formdata.append('photo', {
                                uri: file?.uri,
                                type: file?.type,
                                name: file?.uri,
                            })

                            dispatch(AddDocument(formdata)).then(
                                () => dispatch(ShowAdminResults({
                                    name: Admin?.name,
                                    phone: number
                                }))
                            )
                        }}>
                        {(props) => (
                            <>
                                <TouchableOpacity disabled={file != null} onPress={() => uploadFile(setFile)} style={{ alignItems: 'center' }} activeOpacity={.8}>
                                    <PDF height={130} />
                                    <Text style={{ fontSize: 18, color: '#000', marginBottom: 20, fontWeight: '500', textDecorationLine: 'underline', }}>{file ? file?.name?.slice(0, 10) + '...' : 'تحميل ملف'}</Text>
                                </TouchableOpacity>
                                <CustomTextInput
                                    {...props}
                                    name='name'
                                    Title="اسم الملف"
                                    placeholder="أدخل أسم الملف"
                                    values={props.values}
                                />
                                <CoustomButton
                                    loading={loading}
                                    onpress={() => { props.handleSubmit() }}
                                    Title="رفع (pdf)"
                                    style={styles.button}
                                />
                            </>
                        )}
                    </Formik>
                    {/* <Text onPress={() => openCamera(setModalShow,setImage)} style={{ fontSize: 16, color: COLORS.black, fontWeight: '700', paddingHorizontal: 20, paddingVertical: 10 }}>الكاميرا</Text> */}
                    {/* <View style={{ height: 30, width: 1, backgroundColor: '#000' }} />
                    <Text onPress={() => pickImageFromGallary(setModalShow,setImage)} style={{ fontSize: 16, color: COLORS.black, fontWeight: '700', paddingHorizontal: 20, paddingVertical: 10 }}>المعرض</Text> */}
                </View>

            </Modal >
        </>

    )
}

export default UploadFile


const styles = StyleSheet.create({
    Container: {
        borderWidth: 1.1,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 7,
        width: '100%',
        marginBottom: 20,
    },
    button: {
        alignSelf: 'center',
    },
    Row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'flex-end',
        width: '100%',
    },
    Header: {
        textAlign: 'right',
        color: COLORS.green,
        fontSize: 15,
        fontWeight: '700'
    },
    TextInput: {
        height: 35,
        textAlign: 'right',
        color: COLORS.black,
        fontSize: 14,
        fontWeight: '500',
        alignItems: 'flex-end',
        justifyContent: 'center',
        width: '100%'
    },
    CalendarStyle: {
        height: 350,
        width: '100%',
        alignSelf: 'center',
        marginBottom: 20
    },
})
