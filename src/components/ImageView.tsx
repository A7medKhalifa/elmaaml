import React, { useState } from "react";
import { Image, Modal, Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../values/colors";
import Header from "./HeaderNoDrawer";
import CoustomButton from "./Button";
import { useAppDispatch } from "../redux/store";
import { handleDownload } from "../HF/HF";

const ImageView = ({
    visible,
    setvisible,
    Data
}: {
    visible?: boolean;
    setvisible: any;
    Data?: any;
}) => {
    const dispatch = useAppDispatch()
    const [Loading, setLoading] = useState(false)
    return (
        <>
            <Modal  visible={visible}>
                <SafeAreaView style={styles.Container}>
                    <Header Title="النتائج" onpress={() => setvisible(false)} />
                    <Image
                        source={{ uri: Data }}
                        style={styles.Image}
                    />
                    <CoustomButton
                        loading={Loading}
                        Title="تنزيل"
                        onpress={() => { handleDownload(Data, setLoading, setvisible) }}
                        style={styles.Button}
                    />
                </SafeAreaView>
            </Modal>
        </>
    )
}
export default ImageView

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: "center",
        paddingTop: Platform.OS == 'ios' ? 50 : 0,
        paddingHorizontal: 20
    },
    Image: {
        height: '70%',
        width: '100%',
        borderRadius: 20,
        resizeMode: 'contain',
        marginTop: 20
    },
    Button: {
        position: 'absolute',
        bottom: 50,
    }
})