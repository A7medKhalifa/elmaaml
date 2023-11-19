import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeSuperAdmin from '../../SuperAdmin/Home';
import AddAdmin from '../../SuperAdmin/Add Admin';
import Addm3ml from '../../SuperAdmin/Add m3ml';
import ActiveM3ml from '../../SuperAdmin/Activation';
import AllUsersScreen from '../../SuperAdmin/AllUsers';
import ChangePasswordSuperAdmin from '../../SuperAdmin/ChangePassword';
import ChangePasswordUserSuperAdmin from '../../SuperAdmin/ChangePassword User';

export type AppStack = {
    AddAdmin: undefined;
    Home: undefined;
    Addm3ml: undefined;
    ActiveM3ml: undefined;
    AllUsers: undefined;
    ChangePassword: undefined;
    ChangePasswordUser: undefined;
};

const Stack = createNativeStackNavigator<AppStack>();



const SuperAdminStack = () => {

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Home"
        >
            <Stack.Screen
                name="Home"
                component={HomeSuperAdmin}
            />
            <Stack.Screen
                name="AddAdmin"
                component={AddAdmin}
            />

            <Stack.Screen
                name='Addm3ml'
                component={Addm3ml}
            />
            <Stack.Screen
                name="ActiveM3ml"
                component={ActiveM3ml}
            />
            <Stack.Screen
                name='AllUsers'
                component={AllUsersScreen}
            />
            <Stack.Screen
                name='ChangePassword'
                component={ChangePasswordSuperAdmin}
            />
            <Stack.Screen
                name='ChangePasswordUser'
                component={ChangePasswordUserSuperAdmin}
            />

        </Stack.Navigator>
    );
};

export default SuperAdminStack;
