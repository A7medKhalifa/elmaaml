import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AppDrawer from './Drawer/Drawer';
import { useSelector } from 'react-redux';
import { selectAuth, selectIntro, selectisAdmin } from '../redux/Auth';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/Splash/Splash';
import NeedsInternetConnection from '../components/NeedsInternetConnection';
import SuperLoginScreen from '../SuperAdmin/Login';
import HomeSuperAdmin from '../SuperAdmin/Home';
import ActiveM3ml from '../SuperAdmin/Activation';
import AllUsersScreen from '../SuperAdmin/AllUsers';
import SuperAdminStack from './SuperAdminStack/SuperAdminStack';
import AuthStack from './AuthStack/AuthStack';
import UserStack from './UserStack/UserStack';
import Intro from '../screens/intro';
import AdminStack from './AdminStack/AdminStack';
import AppDrawer from './Drawer/Drawer';

export type AppStack = {
    Auth: undefined;
    App: undefined;
    splash: undefined;
    Introo: undefined;
};

const Stack = createNativeStackNavigator<AppStack>();

const AppStack = () => {
    const [splash, setSplash] = useState(true)
    const isAuth = useSelector(selectAuth)
    const isAdmin = useSelector(selectisAdmin)

    const intro = useSelector(selectIntro)

    useEffect(() => {
        setTimeout(() => {
            setSplash(false)
        }, 1800)
    }, [])
    // alert(intro)
    return (
        <NavigationContainer>
            <NeedsInternetConnection>{
                (
                    <Stack.Navigator
                        screenOptions={{ headerShown: false }}
                        initialRouteName="splash"
                    >
                        {
                            splash &&
                            <Stack.Screen
                                name="splash"
                                component={SplashScreen}
                            />
                        }
                        {/* <Stack.Screen
                                name="SuperAdmin"
                                component={SuperAdminStack}
                            /> */}
                        {
                            !intro &&
                            <Stack.Screen
                                name="Intro"
                                component={Intro}
                            />
                        }
                        {
                            !isAuth ?
                                <Stack.Screen
                                    name="Auth"
                                    component={AuthStack}
                                />
                                :
                                <Stack.Screen
                                    name='App'
                                    component={AppDrawer}
                                />

                        }

                    </Stack.Navigator>
                )}</NeedsInternetConnection>


            {/* <BottomAds /> */}
            {/* {isAuth && <BottomAds />} */}
        </NavigationContainer>

    );
};

export default AppStack;
