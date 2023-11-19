import React from "react"
import { StyleSheet, Text, View } from "react-native"
import COLORS from "../values/colors"
import Modal from "react-native-modal";
import { pickImageFromGallary, openCamera } from "../HF/HF";

type TInput = {
    ModalShow?: boolean;
    setModalShow?: any
    setImage?: any
};

const ChooseCamera = ({
    ModalShow,
    setModalShow,
    setImage
}: TInput) => {

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
                    <Text onPress={() => openCamera(setModalShow,setImage)} style={{ fontSize: 16, color: COLORS.black, fontWeight: '700', paddingHorizontal: 20, paddingVertical: 10 }}>الكاميرا</Text>
                    <View style={{ height: 30, width: 1, backgroundColor: '#000' }} />
                    <Text onPress={() => pickImageFromGallary(setModalShow,setImage)} style={{ fontSize: 16, color: COLORS.black, fontWeight: '700', paddingHorizontal: 20, paddingVertical: 10 }}>المعرض</Text>
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
