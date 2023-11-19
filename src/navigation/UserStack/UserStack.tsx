import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../../screens/User/SearchPage';
import SelectServiceScreen from '../../screens/User/SelectService';
import ResultScreen from '../../screens/User/Results';
import InformationScreen from '../../screens/User/Information';
import OffersScreen from '../../screens/User/Offers';
import { useSelector } from 'react-redux';
import { selectFindLab } from '../../redux/User';

export type AppStack = {
    search: undefined;
    SelectService: undefined;
    Results: undefined;
    Information: undefined;
    Offers: undefined;
};

const Stack = createNativeStackNavigator<AppStack>();

const UserStack = () => {
    const findLab = useSelector(selectFindLab)
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="search"
        >
            {
                !findLab ?
                    <Stack.Screen
                        name="search"
                        component={SearchScreen}
                    />
                    :
                    (<>
                        <Stack.Screen
                            name="SelectService"
                            component={SelectServiceScreen}
                        />
                        <Stack.Screen
                            name="Information"
                            component={InformationScreen}
                        />
                        <Stack.Screen
                            name="Results"
                            component={ResultScreen}
                        />
                        <Stack.Screen
                            name='Offers'
                            component={OffersScreen}
                        />
                    </>)
            }


        </Stack.Navigator>
    );
};

export default UserStack;
