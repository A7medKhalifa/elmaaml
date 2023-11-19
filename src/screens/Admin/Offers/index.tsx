import React, { useEffect, useState } from "react";
import Header from "../../../components/HeaderNoDrawer";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { Empty, Logo } from "../../../assets";
import COLORS from "../../../values/colors";
import { useAppDispatch } from "../../../redux/store";
import { useSelector } from "react-redux";
import { selectOffers } from "../../../redux/User";
import { GetAdminOffers, deleteAdminOffers, } from "../../../redux/User/user.actions";
import { selectAdminData } from "../../../redux/Auth";
import { OfferPlaceHolder } from "../../../HF/HF";
import AnimatedLottieView from "lottie-react-native";
import { ModalOffer } from "./modal";
import CoustomButton from "../../../components/Button";
import ImageView from "../../../components/ImageView";

const OffersScreen = () => {
    const [id, setId] = useState<any>(-1)
    const [visible, setvisible] = useState(false)
    const [visible2, setvisible2] = useState(false)
    const [image, setImage] = useState<any>()
    const [Data, setData] = useState<object>()
    const dispatch = useAppDispatch()
    const Lab = useSelector(selectAdminData)
    const Offers = useSelector(selectOffers)
    useEffect(() => {
        dispatch(GetAdminOffers({ name: Lab?.name }))
    }, [])

    console.warn(JSON.stringify(Lab?.name))
    return (
        <>
            <SafeAreaView style={styles.Container}>
                <View style={{ paddingHorizontal: 20 }}>
                    <Header Title="العروض والخصومات" />
                </View>
                {Offers.length > 0 &&
                    <>
                        <Text style={styles.AppName}>المعمل</Text>
                    </>
                }
                <Text style={styles.WelcomeText}> </Text>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={Offers}
                    style={{ width: '100%', marginTop: -20, paddingVertical: 20, paddingHorizontal: 10 }}
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
                                marginTop: 30,
                                fontSize: 20,
                                fontWeight: '600',
                                color: '#000'
                            }}>لا يوجد عروض حاليه</Text>

                        </View>
                    )}
                    renderItem={({ item }) => (
                        <View style={styles.Card}>
                            <View style={styles.TextContainer}>
                                <Text style={styles.title}>{item?.title}</Text>
                                <Text style={styles.description}>{item?.description}</Text>
                                <View style={styles.ButtonContainer}>
                                    <TouchableOpacity onPress={() => dispatch(deleteAdminOffers({ id: item.id, })).then(
                                        () => dispatch(GetAdminOffers({ name: Lab?.name })))
                                    } style={styles.DeleteButton}>
                                        <Text style={styles.ButtonText}>حذف</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {
                                        setData(item)
                                        setId(item.id)
                                        setvisible(true)
                                    }} style={[styles.DeleteButton, { backgroundColor: COLORS.green }]}>
                                        <Text style={styles.ButtonText}>تعديل</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity activeOpacity={.8} onPress={() => {
                                setImage((item?.photo_path) ? item?.photo_path : OfferPlaceHolder)
                                setvisible2(true)
                            }}>
                                <Image resizeMode="stretch" style={styles.OfferImage} source={{ uri: (item?.photo_path) ? item?.photo_path : OfferPlaceHolder }} />
                            </TouchableOpacity>
                        </View>
                    )}
                />
                <CoustomButton
                    onpress={() => setvisible(true)}
                    Title="إضافة عرض جديد"
                    style={{ width: '90%', alignSelf: 'center' }}
                />
                <ModalOffer id={id} setId={setId} name={Lab?.name} Data={Data} visible={visible} setvisible={setvisible} />
                <ImageView visible={visible2} setvisible={setvisible2} Data={image} />
            </SafeAreaView>
        </>
    )
}
export default OffersScreen