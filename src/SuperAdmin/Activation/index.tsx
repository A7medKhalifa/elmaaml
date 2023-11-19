import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "./styles";
import Header from "../../components/HeaderNoDrawer";
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { ListM3ml } from "../../redux/User/user.actions";
import { selectAdded, selectAllM3ml, selectLoading } from "../../redux/User";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import AnimatedLottieView from "lottie-react-native";
import { LoadingHand } from "../../assets";

const ActiveM3ml = () => {
    const navigation = useNavigation<any>()
    const dispatch = useAppDispatch()
    const AllM3ml = useSelector(selectAllM3ml)
    const loading = useSelector(selectLoading)
    // console.log(AllM3ml)
    const _fun = () => {
        let num = 0
        for (let i = 0; i < AllM3ml.length; i++) {
            num = num +AllM3ml[i].count_users
        }
        return num
    }
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', (e: any) => {
            dispatch(ListM3ml('')).then(() =>
                setFilter(AllM3ml))
        })
        return unsubscribe
    }, [navigation])

    const [search, setSearch] = useState<any>('')
    const [Filter, setFilter] = useState<any[]>(AllM3ml)
    const searchFilter = (text: any) => {
        if (text) {
            const PaidData = AllM3ml.filter((item: any) => {
                const itemData = item?.user_name
                    ? item?.user_name.toUpperCase()
                    : "".toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setSearch(text)
            setFilter(PaidData);
        } else {
            setSearch(text)
            setFilter(AllM3ml);
        }
    }
    useEffect(() => {
        setFilter(AllM3ml)
    }, [AllM3ml])
    return (
        <>
            <SafeAreaView style={styles.Container}>
                <Header Title="كل المعامل" />
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
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: 20
                                }}>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{ color: '#000', fontWeight: '800' }}>{AllM3ml?.length}</Text>
                                        <Text style={{ color: '#000', fontWeight: '800' }}>عدد الأدمنز: </Text>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{ color: '#000', fontWeight: '800' }}>{_fun()}</Text>
                                        <Text style={{ color: '#000', fontWeight: '800' }}>عدد اليوزرز: </Text>
                                    </View>
                                </View>
                                <View style={{ paddingHorizontal: 20, }}>
                                    <View style={[styles.Container2]}>
                                        <Text style={styles.Header}>البحث</Text>
                                        <TextInput
                                            placeholder={"أدخل يوزر المعمل"}
                                            placeholderTextColor={'#87898a'}
                                            value={search}
                                            onChangeText={(value: any) => {
                                                searchFilter(value)
                                            }}
                                            textAlignVertical="bottom"
                                            style={[styles.TextInput, { width: '100%' }]}
                                        />
                                    </View>
                                </View>
                                <FlatList
                                    data={search == '' ? AllM3ml : Filter}
                                    numColumns={2}
                                    columnWrapperStyle={{ justifyContent: 'space-between', padding: 3 }}
                                    renderItem={({ item }) => {
                                        return (
                                            <>
                                                <TouchableOpacity onPress={() => navigation.navigate('AllUsers', {
                                                    name: item.user_name,
                                                    active: item?.active
                                                })} style={{
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
                                                    <Text style={{
                                                        marginTop: 10,
                                                        fontWeight: '700',
                                                        color: 'black'
                                                    }} numberOfLines={1}>{item?.user_name}</Text>
                                                    <Text style={{
                                                        marginTop: 10,
                                                        color: 'black'
                                                    }}>{item?.active == '0' ? 'غير نشط' : 'نشط'}</Text>
                                                    <Text style={{
                                                        marginTop: 10,
                                                        color: 'black'
                                                    }}>{item?.created_at?.slice(0, 10)}</Text>
                                                    <Text style={{
                                                        marginTop: 10,
                                                        color: 'black'
                                                    }}>المستخدمين: {item.count_users}</Text>
                                                </TouchableOpacity>
                                            </>
                                        )
                                    }}
                                />
                            </>

                    }

                </KeyboardAwareScrollView>
            </SafeAreaView>
        </>
    )
}

export default ActiveM3ml;