import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "./styles";
import Header from "../../components/HeaderNoDrawer";
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { ListUsers } from "../../redux/User/user.actions";
import { selectAllUserss, selectLoading, selectdeleteloading } from "../../redux/User";
import { ActivityIndicator, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import AnimatedLottieView from "lottie-react-native";
import { LoadingHand } from "../../assets";
import { activation } from "../../redux/User/user.actions";
import ImageView from "../../components/ImageView";

const AllUsersScreen = (props: any) => {
    const [image, setImage] = useState<any>()
    const [visible, setvisible] = useState(false)
    const name = props.route.params.name
    const active = props.route.params.active
    const navigation = useNavigation<any>()
    const dispatch = useAppDispatch()
    const AllM3ml = useSelector(selectAllUserss)
    const loading = useSelector(selectLoading)
    const load = useSelector(selectdeleteloading)
    // console.log(active)
    useEffect(() => {
        dispatch(ListUsers(name))
    }, [])

    return (
        <>
            <SafeAreaView style={styles.Container}>
                <Header Title="كل اليوزرز" />
                <KeyboardAwareScrollView showsVerticalScrollIndicator={false}
                    style={styles.KeyboardAwareScrollView}>
                    {
                        loading ?
                            <AnimatedLottieView
                                resizeMode="cover"
                                loop={true}
                                autoPlay={true}
                                source={LoadingHand}
                                style={styles.Lottie}
                            />
                            :
                            <>
                                <TouchableOpacity onPress={() => dispatch(activation({
                                    name: 'Hossam',
                                    active: active == 0 ? 1 : 0
                                })).then(() => navigation.navigate('ActiveM3ml'))
                                }
                                    style={{
                                        height: 48,
                                        width: '80%',
                                        alignSelf: 'center',
                                        backgroundColor: 'green',
                                        borderRadius: 10,
                                        marginBottom: 20,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    {
                                        load ?
                                            <ActivityIndicator color={'#fff'} />
                                            :
                                            <Text style={{ color: 'white' }}>{active == 1 ? "إلغاء تنشيط المعمل" : "تنشيط المعمل"}</Text>
                                    }
                                </TouchableOpacity>
                                <FlatList
                                    data={AllM3ml}
                                    numColumns={2}
                                    columnWrapperStyle={{ justifyContent: 'space-between', padding: 3 }}
                                    renderItem={({ item }) => {
                                        return (
                                            <>
                                                <View style={{
                                                    height: 180,
                                                    width: '47%',
                                                    backgroundColor: 'white',
                                                    shadowColor: "#000",
                                                    shadowOffset: {
                                                        width: 0,
                                                        height: 6,
                                                    },
                                                    shadowOpacity: 0.37,
                                                    shadowRadius: 7.49,
                                                    elevation: 12,
                                                    borderRadius: 15,
                                                    marginBottom: 25,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    paddingHorizontal: 10
                                                }}>
                                                    <TouchableOpacity onPress={() => {
                                                        setvisible(true)
                                                        setImage(item)
                                                    }}>
                                                        <Image
                                                            source={{ uri: item.path }}
                                                            style={{
                                                                height: 80,
                                                                width: 80,
                                                                borderRadius: 50,
                                                                marginBottom: 15
                                                            }}
                                                        />
                                                    </TouchableOpacity>

                                                    <Text style={{
                                                        marginTop: 10,
                                                        fontWeight: '700',
                                                        color: 'black'
                                                    }} numberOfLines={1}>{item?.name}</Text>
                                                </View>
                                            </>
                                        )
                                    }}
                                />
                            </>

                    }

                </KeyboardAwareScrollView>
                <ImageView Data={image?.path} visible={visible} setvisible={setvisible} />
            </SafeAreaView>
        </>
    )
}

export default AllUsersScreen;