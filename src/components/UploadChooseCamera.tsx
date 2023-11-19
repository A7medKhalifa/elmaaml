import React from "react"
import { StyleSheet, Text, View } from "react-native"
import COLORS from "../values/colors"
import Modal from "react-native-modal";
import { pickImageFromGallary, openCamera } from "../HF/HF";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { AddDocument, ShowAdminResults } from "../redux/User/user.actions";
import { useSelector } from "react-redux";
import { selectAdminData } from "../redux/Auth";
import { useAppDispatch } from "../redux/store";

type TInput = {
    ModalShow?: boolean;
    setModalShow?: any
    number?: any;
};

const ChooseCamera = ({
    ModalShow,
    setModalShow,
    number
}: TInput) => {
    const dispatch = useAppDispatch()
    const Admin = useSelector(selectAdminData)

    return (
        <>

            <Modal
                isVisible={ModalShow}
                onBackButtonPress={() => setModalShow(false)}
                onBackdropPress={() => setModalShow(false)}
                style={{
                    justifyContent: 'flex-end'
                }}
            >
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    padding: 20,
                    paddingVertical: 10,
                    width: '100%',
                    backgroundColor: 'white',
                    borderRadius: 20,
                    marginBottom: 20
                }}>
                    <Text onPress={() => {
                        launchCamera({
                            mediaType: 'photo',
                            saveToPhotos: true,
                            quality: 1
                        }).then(
                            (res: any) => {
                                // alert(JSON.stringify(res))
                                const formdata = new FormData();
                                formdata.append('title', 'Photo')
                                formdata.append('phone', number)
                                formdata.append('photo', {
                                    uri: res?.assets[0]?.uri,
                                    type: res?.assets[0]?.type,
                                    name: res?.assets[0]?.uri,
                                })
                                dispatch(AddDocument(formdata)).then(
                                    (res) => {
                                        // alert(JSON.stringify(res))
                                        setModalShow(false)
                                        dispatch(ShowAdminResults({
                                            name: Admin?.name,
                                            phone: number
                                        }))
                                    }
                                )
                            }
                        )
                    }} style={{ fontSize: 16, color: COLORS.black, fontWeight: '700', paddingHorizontal: 20, paddingVertical: 10 }}>الكاميرا</Text>
                    <View style={{ height: 30, width: 1, backgroundColor: '#000' }} />
                    <Text onPress={() => {
                        launchImageLibrary({
                            mediaType: 'photo',
                            quality: 1
                        }).then(
                            (res: any) => {
                                // alert(JSON.stringify(res))
                                const formdata = new FormData();
                                formdata.append('title', 'Photo')
                                formdata.append('phone', number)
                                formdata.append('photo', {
                                    uri: res?.assets[0]?.uri,
                                    type: res?.assets[0]?.type,
                                    name: res?.assets[0]?.uri,
                                })
                                dispatch(AddDocument(formdata)).then(
                                    () => {
                                        setModalShow(false)
                                        dispatch(ShowAdminResults({
                                            name: Admin?.name,
                                            phone: number
                                        }))
                                    }
                                )
                            }
                        )
                    }} style={{ fontSize: 16, color: COLORS.black, fontWeight: '700', paddingHorizontal: 20, paddingVertical: 10 }}>المعرض</Text>
                </View>

            </Modal >
        </>

    )
}

export default ChooseCamera


const styles = StyleSheet.create({
    Container: {
        borderWidth: 1.1,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 7,
        width: '100%',
        marginBottom: 20,
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
