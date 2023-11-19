import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectServiceScreen from '../../screens/Admin/SelectService';
import ResultScreen from '../../screens/Admin/Results';
import InformationScreen from '../../screens/Admin/Information';
import OffersScreen from '../../screens/Admin/Offers';
import UserDashboardScreen from '../../screens/Admin/UserDashboard';
import { useSelector } from 'react-redux';
import { changeIntroStatus, logout, selectAdminData } from '../../redux/Auth';
import { useAppDispatch } from '../../redux/store';
import { changeFindLab, changeLab, logoutUser } from '../../redux/User';
import { useNavigation } from '@react-navigation/native';

export type AppStack = {
    search: undefined;
    SelectService: undefined;
    UserDashboard: undefined;
    Results: undefined;
    Information: undefined;
    Offers: undefined;
};

const Stack = createNativeStackNavigator<AppStack>();



const AdminStack = () => {
    const dispatch = useAppDispatch()
    const Admin = useSelector(selectAdminData)
    const navigation = useNavigation<any>()
    useEffect(() => {
        Admin?.data_of_factory?.active == "0" && (
            dispatch(changeLab({
                id: 0,
                name: "",
                title: "",
                active: "",
                description: "",
            })),
            dispatch(changeFindLab(false)),
            dispatch(logout()),
            dispatch(logoutUser()),
            dispatch(changeIntroStatus(true))
        )
    }, [navigation])
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="SelectService"
        >
            <Stack.Screen
                name="SelectService"
                component={SelectServiceScreen}
            />
            <Stack.Screen
                name="Information"
                component={InformationScreen}
            />

            <Stack.Screen
                name='UserDashboard'
                component={UserDashboardScreen}
            />

            <Stack.Screen
                name="Results"
                component={ResultScreen}
            />
            <Stack.Screen
                name='Offers'
                component={OffersScreen}
            />
        </Stack.Navigator>
    );
};

export default AdminStack;
