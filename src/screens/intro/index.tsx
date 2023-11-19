import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { changeIntroStatus } from "../../redux/Auth/auth.slice";
import { styles } from "./styles";
import { slides } from "./SlidesData";
import { useAppDispatch } from "../../redux/store";
import { Logo } from "../../assets";
import CoustomButton from "../../components/Button copy";



const Intro = () => {
    const dispatch = useAppDispatch()


    return (
        <SafeAreaView style={styles.Container}>
            <TouchableOpacity style={{ zIndex: 100 }}
                onPress={() => {
                    dispatch(changeIntroStatus(true))
                }}>
                <Text style={styles.Skip}>Skip</Text>
            </TouchableOpacity>
            <AppIntroSlider
                data={slides}
                renderItem={({ item }) => {
                    return (
                        <>
                            <View style={styles.IntroSliderContainer}>
                                <Image source={Logo} style={styles.Logo} />
                                <View>
                                    <Text style={styles.Title}>{item.title}</Text>
                                    <Text style={styles.Description}>{item.description}</Text>
                                </View>
                                <View style={{ height: '20%' }} />
                            </View>

                        </>
                    )
                }}
                activeDotStyle={styles.activeDotStyle}
                dotStyle={styles.disactiveDotStyle}
                onDone={() => dispatch(changeIntroStatus(true))}
                bottomButton
                renderNextButton={() => <CoustomButton Title="التالي" />}
                renderDoneButton={() => <CoustomButton Title="انهاء" />}
            />

        </SafeAreaView >

    )
}

export default Intro