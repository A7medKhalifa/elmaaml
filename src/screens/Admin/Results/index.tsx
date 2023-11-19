import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Header from "../../../components/HeaderNoDrawer";
import { BackHandler, FlatList, Image, Linking, Modal, Platform, Text, TouchableOpacity, View } from "react-native";
import ImageView from "../../../components/ImageView";
import CoustomButton from "../../../components/Button";
import ChooseCamera from "../../../components/UploadChooseCamera";
import UploadFile from "../../../components/UploadFile";
import { useAppDispatch } from "../../../redux/store";
import { changeUploaded, selectImages, selectLoading } from "../../../redux/User";
import { ShowAdminResults, deleteDocument } from "../../../redux/User/user.actions";
import { useSelector } from "react-redux";
import { selectAdminData } from "../../../redux/Auth";
import { downloadFile, isImage } from "../../../HF/HF";
import { CloseI, Download, LoadingHand, PDF } from "../../../assets";
import COLORS from "../../../values/colors";
import WebView from "react-native-webview";
import { useFocusEffect } from "@react-navigation/native";
import LottieView from "lottie-react-native";


const ResultScreen = (props: any) => {
    const number = props.route.params.number
    const dispatch = useAppDispatch()
    const [visible, setvisible] = useState(false)
    const [ModalShow, setModalShow] = useState(false)
    const [ModalShowpdf, setModalShowpdf] = useState(false)
    const [pdf, setpdf] = useState<any>()
    const [pdfv, setpdfv] = useState<any>(false)
    const Admin = useSelector(selectAdminData)
    const Images = useSelector(selectImages)
    const load = useSelector(selectLoading)
    const [image, setImage] = useState<any>()
    const [Loading, setLoading] = useState(false)
    useEffect(() => {
        dispatch(ShowAdminResults({
            name: Admin?.name,
            phone: number
        }))
    }, [])
    useFocusEffect(
        React.useCallback(() => {

            const onBackPress = () => {
                setpdfv(false)
                return false;
            };
            BackHandler.addEventListener('hardwareBackPress', onBackPress);

            return () =>
                BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, []),
    );
    return (
        <>
            {
                pdfv ?
                    <SafeAreaView style={{
                        flex: 1,
                        width: '100%',
                        backgroundColor: '#fff',
                        alignSelf: 'center',
                        paddingHorizontal: 20
                    }}>
                        <Header Title="النتائج" onpress={() => setpdfv(false)} />
                        <WebView
                            source={{ uri: Platform.OS == 'ios' ? pdf : `https://docs.google.com/viewer?url=${pdf}` }}
                            style={{ flex: 2, width: '100%', }}
                        />
                    </SafeAreaView>
                    :
                    <SafeAreaView style={styles.Container}>
                        <Header Title="النتائج" />
                        {
                            load
                                ?
                                <LottieView
                                    resizeMode="cover"
                                    loop={true}
                                    autoPlay={true}
                                    source={LoadingHand}
                                    style={styles.Lottie}
                                />
                                :
                                <>
                                    <FlatList
                                        data={Images}
                                        style={{ width: '100%' }}
                                        showsVerticalScrollIndicator={false}
                                        renderItem={({ item }) => (
                                            isImage(item?.path) ?
                                                <>

                                                    <TouchableOpacity onPress={() => {
                                                        setvisible(true)
                                                        setImage(item)
                                                    }} activeOpacity={.8}>
                                                        <TouchableOpacity
                                                            onPress={() => dispatch(deleteDocument({
                                                                id: item.id,
                                                            })).then(
                                                                () => dispatch(ShowAdminResults({
                                                                    name: Admin?.name,
                                                                    phone: number
                                                                }))
                                                            )
                                                            }
                                                            style={{ position: 'absolute', zIndex: 1, top: 0, right: 0 }}>
                                                            <CloseI />
                                                        </TouchableOpacity>
                                                        <Image
                                                            source={{ uri: item?.path }}
                                                            style={{
                                                                height: 250,
                                                                width: '100%',
                                                                borderRadius: 20,
                                                                marginTop: 15,
                                                                marginBottom:20
                                                            }}
                                                        />
                                                    </TouchableOpacity>
                                                </>
                                                :
                                                <>
                                                    <TouchableOpacity disabled={Loading} onPress={() => {
                                                        setpdf(item.path)
                                                        setpdfv(true)
                                                    }}
                                                        style={{
                                                            height: 250,
                                                            width: '98%',
                                                            alignSelf: 'center',
                                                            borderRadius: 20,
                                                            marginTop: 15,
                                                            shadowColor: "#000",
                                                            shadowOffset: {
                                                                width: 0,
                                                                height: 2,
                                                            },
                                                            shadowOpacity: 0.25,
                                                            shadowRadius: 3.84,
                                                            elevation: 5,
                                                            backgroundColor: '#fff',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            marginBottom:20
                                                        }}
                                                        activeOpacity={.8}>
                                                        <TouchableOpacity
                                                            onPress={() => dispatch(deleteDocument({
                                                                id: item.id,
                                                            })).then(
                                                                () => dispatch(ShowAdminResults({
                                                                    name: Admin?.name,
                                                                    phone: number
                                                                }))
                                                            )}
                                                            style={{ position: 'absolute', zIndex: 1, top: 0, right: 0 }}>
                                                            <CloseI />
                                                        </TouchableOpacity>
                                                        <TouchableOpacity onPress={() => downloadFile(item.path, setLoading)} style={{
                                                            position: 'absolute',
                                                            bottom: 0,
                                                            left: 0
                                                        }}>
                                                            <Download />
                                                        </TouchableOpacity>
                                                        <PDF />
                                                        <Text style={{
                                                            fontSize: 16,
                                                            fontWeight: '500',
                                                            color: COLORS.black,
                                                            marginTop: 15
                                                        }}>{(item?.title)?.slice(0, 30)}</Text>
                                                    </TouchableOpacity>
                                                </>
                                        )}
                                    />

                                    <CoustomButton
                                        loading={false}
                                        onpress={() => { setModalShow(true) }}
                                        Title="رفع (صوره)"
                                        style={[styles.button, { marginBottom: 10 }]}
                                    />
                                    <CoustomButton
                                        loading={false}
                                        onpress={() => {
                                            dispatch(changeUploaded(false))
                                            setModalShowpdf(true)
                                        }}
                                        Title="رفع (pdf)"
                                        style={styles.button}
                                    />
                                </>

                        }

                        <ChooseCamera number={number} ModalShow={ModalShow} setModalShow={setModalShow} />
                        <UploadFile number={number} ModalShow={ModalShowpdf} setModalShow={setModalShowpdf} />
                        <ImageView visible={visible} setvisible={setvisible} Data={image?.path} />
                    </SafeAreaView>
            }
        </>
    )
}

export default ResultScreen;