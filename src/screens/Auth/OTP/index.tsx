import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Logo } from "../../../assets";
import CoustomButton from "../../../components/Button";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Header from "../../../components/HeaderNoDrawer";
import { useAppDispatch } from "../../../redux/store";
import { changeforgot, changeregisted, selectLoading, selectreset } from "../../../redux/Auth";
import { useSelector } from "react-redux";
import { verifyRegist } from "../../../redux/Auth/auth.actions";
import { checkResetPassword } from "../../../redux/Auth/auth.actions";
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from "react-native-confirmation-code-field";

const OTPScreen = (props: any) => {
    const { navigate } = useNavigation<any>()
    const navigation = useNavigation<any>()
    const number = props.route.params.number
    const Type = props.route.params.Type
    const loading = useSelector(selectLoading)
    const reset = useSelector(selectreset)
    const dispatch = useAppDispatch()
    const [otp, setOtp] = useState()

    const _submit = () => {
        Type == 'verify' ?
            dispatch(verifyRegist({
                code: otp,
                mobile: number
            }))
            :
            dispatch(checkResetPassword({
                code: otp,
                mobile: number
            }))
    }
    // alert()
    useEffect(() => {
        reset && navigate('ResetPassword', { number })
        const RenderFunction = navigation.addListener('focus', () => {
            dispatch(changeforgot(false))
            dispatch(changeregisted(false))
        })
        return RenderFunction
    }, [navigation, reset])
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: 6 });
    const [propss, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    return (
        <>
            <SafeAreaView style={styles.Container}>
                <Header Title="رمز التأكيد" />

                <Image source={Logo} style={styles.Logo} />
                <Text style={styles.AppName}>المعمل</Text>

                <CodeField
                    ref={ref}
                    {...props}
                    value={otp}
                    onChangeText={(value) => setOtp(value)}
                    cellCount={6}
                    rootStyle={{ marginHorizontal: 65, marginTop: 23, direction: 'ltr' }}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <View
                            onLayout={getCellOnLayoutHandler(index)}
                            key={index}
                            style={[
                                styleCodeInput.cellRoot,
                                isFocused && styleCodeInput.focusCell,
                            ]}>
                            <Text style={styleCodeInput.cellText}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        </View>
                    )}
                />
                {/* 
                <OTPInput
                    value={otp}
                    onChange={(value: any) => setOtp(value)}
                    tintColor="#000"
                    offTintColor={COLORS.green}
                    otpLength={6}
                    autoFocusOnLoad={true}

                /> */}
                <CoustomButton
                    onpress={() => {
                        _submit()
                    }}
                    loading={loading}
                    Title="إعاده تعيين"
                    style={{
                        position: 'absolute',
                        bottom: 50,
                    }}
                />


            </SafeAreaView>
        </>
    )
}

export default OTPScreen;


const styleCodeInput = StyleSheet.create({
    root: { padding: 20, minHeight: 300, alignSelf: 'center' },
    title: { textAlign: 'center', fontSize: 30, alignSelf: 'center' },
    codeFieldRoot: {},
    cellRoot: {
        width: 40,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'green',
        borderBottomWidth: 1,
        opacity: 0.5,
        marginHorizontal: 5,
        //   alignSelf: 'center',
        //   marginTop: responsiveHeight(150)
    },
    cellText: {
        color: 'green',
        fontSize: 36,
        textAlign: 'center',
    },
    focusCell: {
        borderBottomColor: '#green',
        borderBottomWidth: 2,
    },
});