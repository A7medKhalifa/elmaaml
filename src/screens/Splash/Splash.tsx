import React from "react";
import { Image, Text, View } from "react-native";
import { Logo } from "../../assets";
import { styles } from "./styles";
import * as Animatable from 'react-native-animatable';


const SplashScreen = () => {
    return (
        <>
            <View style={{
                height: '100%',
                width: '100%',
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Animatable.View animation={'zoomIn'} delay={1000}>
                    <Text style={styles.AppName}>المعمل</Text>
                </Animatable.View>
            </View>
        </>
    )
}

export default SplashScreen