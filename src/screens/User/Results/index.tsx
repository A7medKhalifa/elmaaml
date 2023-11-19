import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Header from "../../../components/HeaderNoDrawer";
import { BackHandler, FlatList, Image, Linking, Platform, Text, TouchableOpacity, View } from "react-native";
import { Download, Empty, PDF } from "../../../assets";
import ImageView from "../../../components/ImageView";
import { useAppDispatch } from "../../../redux/store";
import { ShowResults } from "../../../redux/User/user.actions";
import { useSelector } from "react-redux";
import { selectImages, selectLab } from "../../../redux/User";
import { selectUserData } from "../../../redux/Auth";
import AnimatedLottieView from "lottie-react-native";
import { downloadFile, isImage } from "../../../HF/HF";
import COLORS from "../../../values/colors";
import WebView from "react-native-webview";
import { useFocusEffect } from "@react-navigation/native";


const ResultScreen = () => {
    const [image, setImage] = useState<any>()
    const [pdf, setpdf] = useState<any>()
    const [pdfv, setpdfv] = useState<any>(false)
    const [visible, setvisible] = useState(false)
    const [Loading, setLoading] = useState(false)
    const dispatch = useAppDispatch()
    const Lab = useSelector(selectLab)
    const User = useSelector(selectUserData)
    const Images = useSelector(selectImages)
    useEffect(() => {
        dispatch(ShowResults({
            name: Lab?.user_name,
            phone: User?.Phone_number
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
    // alert(JSON.stringify(_data))
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
                        // alignItems: 'center'
                    }}>
                        <Header Title="النتائج" onpress={() => setpdfv(false)} />
                        <WebView
                            source={{ uri: Platform.OS == 'ios' ? pdf : `https://docs.google.com/viewer?url=${pdf}` }}
                            style={{ flex: 2, width: '100%', }}
                        />
                    </SafeAreaView>
                    :
                    <SafeAreaView style={styles.Container}>
                        <Header Title="التحاليل" />
                        <FlatList
                            data={Images}
                            style={{ width: '100%', marginBottom: 10 }}
                            showsVerticalScrollIndicator={false}
                            ListEmptyComponent={() => (
                                <View style={{
                                    height: '100%',
                                    width: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <AnimatedLottieView
                                        resizeMode="cover"
                                        loop={true}
                                        autoPlay={true}
                                        source={Empty}
                                        style={styles.Lottie}
                                    />
                                    <Text style={{
                                        marginTop: 100,
                                        fontSize: 20,
                                        fontWeight: '600',
                                        color: '#000'
                                    }}>لا يوجد تحاليل سابقه</Text>

                                </View>
                            )}
                            renderItem={({ item }) => {
                                return (
                                    isImage(item?.path) ?
                                        <>
                                            <TouchableOpacity onPress={() => {
                                                setvisible(true)
                                                setImage(item)
                                            }} activeOpacity={.8}>
                                                <Image
                                                    source={{ uri: item?.path }}
                                                    style={{
                                                        height: 250,
                                                        width: '100%',
                                                        borderRadius: 20,
                                                        marginTop: 15
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
                                                    marginBottom: 5
                                                }}
                                                activeOpacity={.8}>
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
                                                }}>{(item?.title).slice(0, 30)}</Text>
                                            </TouchableOpacity>
                                        </>
                                )

                            }}
                        />
                        <ImageView Data={image?.path} visible={visible} setvisible={setvisible} />
                    </SafeAreaView>
            }


        </>
    )
}

export default ResultScreen;