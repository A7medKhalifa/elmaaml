import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import COLORS from "../values/colors";
import LottieView from "lottie-react-native";
import { LoadingLottie } from "../assets";

const CoustomButton = ({
    Title,
    style,
    loading,
    onpress
}: {
    Title: string
    style?: any
    loading?: boolean
    onpress?: any

}) => {
    return (
        <>
            <View
                style={[styles.TouchableOpacity, style]}>
                {loading ?
                    <LottieView
                        resizeMode="cover"
                        loop={true}
                        autoPlay={true}
                        source={LoadingLottie}
                        style={styles.Lottie}
                    /> :
                    <Text style={styles.Title}>{Title}</Text>
                }
            </View>
        </>
    )
}

export default CoustomButton;

const styles = StyleSheet.create({
    TouchableOpacity: {
        height: 50,
        width: '100%',
        backgroundColor: COLORS.green,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Title: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.white
    },
    Lottie: {
        height: 150,
        width: 150,
        alignSelf: 'center',
    }
})