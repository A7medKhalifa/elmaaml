import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomSidebarMenu from './CustomDrawer';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';
import COLORS from '../../values/colors';
import { Home, Lockk, Search, SearchD, User, User2 } from '../../assets';
import UserStack from '../UserStack/UserStack';
import AdminStack from '../AdminStack/AdminStack';
import { useSelector } from 'react-redux';
import { selectisAdmin } from '../../redux/Auth';
import ChangeProfileScreen from '../../screens/User/ChangeProfile';
import ChangePasswordScreen from '../../screens/User/ChangePassword';
import ChangePasswordAdminScreen from '../../screens/Admin/ChangePassword';
const { height } = Dimensions.get("window");

const Drawer = createDrawerNavigator();



export default function AppDrawer() {
    const Admin = useSelector(selectisAdmin)

    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: COLORS.green,
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#545454',
                drawerLabelStyle: {
                    fontSize: RFValue(17, height),
                    height: 25,
                    justifyContent: 'center',
                    marginTop: 5,
                    marginRight: -20,
                    fontWeight: '700',
                    textAlign: 'right'
                },
                drawerPosition: 'right'
            }}
            drawerContent={props => <CustomSidebarMenu {...props} />}
        >
            {
                !Admin ?
                    (
                        <>
                            <Drawer.Screen
                                name="الصفحه الرئيسية"
                                component={UserStack}
                                options={{
                                    drawerIcon: ({ focused, size }) => (
                                        focused ? <Home fill={'#fff'} style={{ marginLeft: 10 }} />
                                            : <Home fill={'#000'} style={{ marginLeft: 10 }} />
                                    ),
                                }}
                            />
                            <Drawer.Screen
                                name="تعديل البروفايل"
                                component={ChangeProfileScreen}
                                options={{
                                    drawerIcon: ({ focused, size }) => (
                                        focused ? <User2 fill={'#fff'} style={{ marginLeft: 10 }} />
                                            : <User2 style={{ marginLeft: 10 }} />
                                    ),
                                }}
                            />
                            <Drawer.Screen
                                name="تغيير الرقم السري"
                                component={ChangePasswordScreen}
                                options={{
                                    drawerIcon: ({ focused, size }) => (
                                        focused ? <Lockk fill={'#fff'} style={{ marginLeft: 10 }} />
                                            : <Lockk fill={'#000'} style={{ marginLeft: 10 }} />
                                    ),
                                }}
                            />
                        </>
                    )
                    :
                    <>
                        <Drawer.Screen
                            name="الصفحه الرئيسية"
                            component={AdminStack}
                            options={{
                                drawerIcon: ({ focused, size }) => (
                                    focused ? <Home fill={'#fff'} style={{ marginLeft: 10 }} />
                                        : <Home fill={'#000'} style={{ marginLeft: 10 }} />
                                ),
                            }}
                        />
                        <Drawer.Screen
                            name="تغيير الرقم السري"
                            component={ChangePasswordAdminScreen}
                            options={{
                                drawerIcon: ({ focused, size }) => (
                                    focused ? <Lockk fill={'#fff'} style={{ marginLeft: 10 }} />
                                        : <Lockk fill={'#000'} style={{ marginLeft: 10 }} />
                                ),
                            }}
                        />
                    </>

            }


        </Drawer.Navigator>
    );
}