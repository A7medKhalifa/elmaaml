import React, { useEffect, useState } from "react";
import Header from "../../../components/HeaderNoDrawer";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { FlatList, Image, ScrollView, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { Empty, Logo } from "../../../assets";
import COLORS from "../../../values/colors";
import { useAppDispatch } from "../../../redux/store";
import { GetOffers } from "../../../redux/User/user.actions";
import { selectLab, selectOffers } from "../../../redux/User";
import { useSelector } from "react-redux";
import AnimatedLottieView from "lottie-react-native";
import ImageView from "../../../components/ImageView";
import { OfferPlaceHolder } from "../../../HF/HF";

const OffersScreen = () => {
    const { navigate } = useNavigation<any>()
    const dispatch = useAppDispatch()
    const [visible2, setvisible2] = useState(false)
    const [image, setImage] = useState<any>()
    const Lab = useSelector(selectLab)
    const Offers = useSelector(selectOffers)
    useEffect(() => {
        dispatch(GetOffers({ name: Lab?.user_name }))
    }, [])

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
                            </View>
                            <TouchableOpacity activeOpacity={.8} onPress={() => {
                                setImage(item?.photo_path ? item?.photo_path : OfferPlaceHolder )
                                setvisible2(true)
                            }}>
                                <Image resizeMode="stretch" style={styles.OfferImage} source={{ uri: item?.photo_path ? item?.photo_path : OfferPlaceHolder }} />
                            </TouchableOpacity>
                        </View>
                    )}
                />

                <ImageView visible={visible2} setvisible={setvisible2} Data={image} />
            </SafeAreaView >
        </>
    )
}
export default OffersScreen