
import React from 'react';
import { SafeAreaView, StyleSheet, Text, Dimensions, View, TouchableOpacity, Platform, Image, Linking, } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { RFValue } from 'react-native-responsive-fontsize';
import { useDispatch, useSelector } from 'react-redux';
import { changeIntroStatus, logout, selectUserData } from '../../redux/Auth';
import { Facebook, LogOut, Whatsapp } from '../../assets';
import { ImagePlaceHolder } from '../../HF/HF';
import { changeFindLab, changeLab, logoutUser } from '../../redux/User';
const { height } = Dimensions.get("window")

const CustomSidebarMenu = (props: any) => {
    const dispatch = useDispatch()
    const User = useSelector(selectUserData)

    return (
        <SafeAreaView style={styles.Container}>
            <DrawerContentScrollView {...props}>

                {User.date_of_birth != "" &&
                    < Image source={{ uri: User?.photo ? User?.photo : ImagePlaceHolder }} style={{
                        height: 100,
                        width: 100,
                        borderRadius: 100,
                        alignSelf: 'center'
                    }} />}
                {User.date_of_birth != "" ? <Text style={styles.MainMenu}>{User?.name?.split(' ').slice(0, 2).join(' ')}</Text> : <View style={{ marginBottom: Platform.OS == 'ios' ? 70 : 60 }} />}
                <DrawerItemList {...props} />
                <View style={styles.Seprator} />
                <TouchableOpacity onPress={() => {
                    dispatch(changeLab({
                        id: 0,
                        name: "",
                        title: "",
                        active: "",
                        description: "",
                    }))
                    dispatch(changeFindLab(false))
                    dispatch(logout())
                    dispatch(logoutUser())
                    dispatch(changeIntroStatus(true))

                }} style={styles.LogOutButton}>
                    <LogOut />
                    <Text style={styles.LogOutText}>تسجيل خروج</Text>
                </TouchableOpacity>
                <Text style={{
                    textAlign: 'center',
                    marginTop: 60,
                    color: '#000',
                    fontSize: 16,
                    fontWeight: '700'
                }}>معلومات عن التطبيق </Text>
                <View style={{
                    flexDirection: 'row',
                    width: '80%',
                    alignSelf: 'center',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginTop: 10
                }}>
                    <TouchableOpacity activeOpacity={.8} onPress={() => { Linking.openURL('https://www.facebook.com/app.alm3ml?mibextid=ZbWKwL') }}>
                        <Facebook />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.8} onPress={() => { Linking.openURL("whatsapp://send?phone=+201003067958") }}>
                        <Whatsapp />
                    </TouchableOpacity>
                </View>

            </DrawerContentScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    Container:
    {
        flex: 1,
        width: '90%',
        alignSelf: 'center',
        marginTop: Platform.OS == 'ios' ? 0 : 50
        // paddingHorizontal: 25
    },
    Close:
    {
        alignSelf: 'flex-end',
    },
    MainMenu:
    {
        fontSize: RFValue(15, height),
        textAlign: 'center',
        color: '#000',
        marginTop: Platform.OS == 'ios' ? 30 : 20,
        marginBottom: 40,
        fontWeight: '700'
    },
    Seprator:
    {
        height: 1.5,
        backgroundColor: '#2E2E2E1F',
        width: '100%',
        alignSelf: 'center',
        marginVertical: 20
    },
    LogOutButton:
    {
        paddingVertical: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    LogOutText:
    {
        fontSize: RFValue(17, height),
        textAlign: 'right',
        color: '#2E2E2E',
        marginRight: 13,
        fontWeight: '600',
    }

});

export default CustomSidebarMenu;