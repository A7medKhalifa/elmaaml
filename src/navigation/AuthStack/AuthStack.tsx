import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, SignUpScreen, ChooseTypeScreen,ResetPasswordScreen, ForgetPasswordScreen, OTPScreen, AdminLoginScreen } from '../../screens/Auth';
export type AppStack = {
    ChooseType: undefined;
    Login: undefined;
    AdminLogin: undefined
    SignUp: undefined;
    ForgetPassword: undefined;
    ResetPassword: undefined;
    OTP: undefined;
};

const Stack = createNativeStackNavigator<AppStack>();

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="ChooseType"
        >
            <Stack.Screen
                name='ChooseType'
                component={ChooseTypeScreen}
            />
            <Stack.Screen
                name="AdminLogin"
                component={AdminLoginScreen}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
            />
            {/* <Stack.Screen
                name="ForgetPassword"
                component={ForgetPasswordScreen}
            /> */}
            <Stack.Screen
                name="OTP"
                component={OTPScreen}
            />
            <Stack.Screen
                name="ResetPassword"
                component={ResetPasswordScreen}
            />
            

        </Stack.Navigator>
    );
};

export default AuthStack;
