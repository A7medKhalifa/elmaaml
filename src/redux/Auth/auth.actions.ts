import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../apis/auth";
import { userApi } from "../apis/user";


export const Login = createAsyncThunk<any, any, any>('Login', async (
    args, { rejectWithValue }
) => {
    try {
        let res = await authApi.login(args);
        if (res?.data) {
            return res?.data;
        } else {
            return res;
        }
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const LoginAdmin = createAsyncThunk<any, any, any>('LoginAdmin', async (
    args, { rejectWithValue }
) => {
    try {
        let res = await authApi.adminlogin(args);
        console.log(JSON.stringify(res.data))
        if (res?.data) {
            return res?.data;
        } else {
            return res;
        }
    } catch (error) {
        return rejectWithValue(error)
    }
})


export const Register = createAsyncThunk<any, any, any>('Register', async (
    args, { rejectWithValue }
) => {
    try {
        let res = await authApi.register(args);
        // alert(JSON.stringify(res?.data))
        if (res?.data) {
            return res?.data;
        } else {
            return res;
        }
    } catch (error) {
        return rejectWithValue(error)
    }
})


export const verifyRegist = createAsyncThunk<any, any, any>('verifyRegist', async (
    args, { rejectWithValue }
) => {
    try {
        let res = await authApi.verifyUser(args);
        // alert(JSON.stringify(res.data))
        if (res?.data) {
            return res?.data;
        } else {
            return res;
        }
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const forgetPassword = createAsyncThunk<any, any, any>('forgetPassword', async (
    args, { rejectWithValue }
) => {
    try {
        let res = await authApi.forgetPassword(args);
        // alert(JSON.stringify(res.data))
        if (res?.data) {
            return res?.data;
        } else {
            return res;
        }
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const checkResetPassword = createAsyncThunk<any, any, any>('checkResetPassword', async (
    args, { rejectWithValue }
) => {
    try {
        let res = await authApi.checkResetPassword(args);
        // alert(JSON.stringify(res.data))
        // alert(JSON.stringify(args))
        if (res?.data) {
            return res?.data;
        } else {
            return res;
        }
    } catch (error) {
        return rejectWithValue(error)
    }
})


export const resetPassword = createAsyncThunk<any, any, any>('resetpassword', async (
    args, { rejectWithValue }
) => {
    try {
        let res = await authApi.resetpassword(args);
        // alert(JSON.stringify(res.data))
        if (res?.data) {
            return res?.data;
        } else {
            return res;
        }
    } catch (error) {
        return rejectWithValue(error)
    }
})


export const editFactory = createAsyncThunk<any, any, any>('editFactory', async (
    args, { rejectWithValue }
) => {
    try {
        let res = await userApi.editFactory(args);
        // alert(JSON.stringify(res.data))
        if (res?.data) {
            return res?.data;
        } else {
            return res;
        }
    } catch (error) {
        return rejectWithValue(error)
    }
})
