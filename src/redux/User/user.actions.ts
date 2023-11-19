import { createAsyncThunk } from "@reduxjs/toolkit";
import { userApi } from "../apis/user";

export const FindLab = createAsyncThunk<any, any, any>('FindLab', async (
    args, { rejectWithValue }
) => {
    try {
        let res = await userApi.FindLab(args);
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

export const ShowResults = createAsyncThunk<any, any, any>('ShowResults', async (
    args, { rejectWithValue }
) => {
    try {
        let res = await userApi.showResults(args);
        // alert(JSON.stringify(res))
        if (res?.data) {
            return res?.data;
        } else {
            return res;
        }
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const ShowAdminResults = createAsyncThunk<any, any, any>('ShowAdminResults', async (
    args, { rejectWithValue }
) => {
    try {
        let res = await userApi.showAdminResults(args);
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
export const getProfile = createAsyncThunk<any, any, any>('getProfile', async (
    args, { rejectWithValue }
) => {
    try {
        let res = await userApi.getProfile();
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
export const EditProfile = createAsyncThunk<any, any, any>('EditProfile', async (
    args, { rejectWithValue }
) => {
    try {
        let res = await userApi.editProfile(args);
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
export const deleteProfile = createAsyncThunk<any, any, any>('deleteProfile', async (
    args, { rejectWithValue }
) => {
    try {
        let res = await userApi.deleteProfile();
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
export const EditPassword = createAsyncThunk<any, any, any>('EditPassword', async (
    args, { rejectWithValue }
) => {
    try {
        let res = await userApi.editPassword(args);
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

export const EditPasswordAdmin = createAsyncThunk<any, any, any>('EditPasswordAdmin', async (
    args, { rejectWithValue }
) => {
    try {
        let res = await userApi.editPasswordAdmin(args);
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

export const GetOffers = createAsyncThunk<any, any, any>('GetOffers', async (
    args, { rejectWithValue }
) => {
    try {
        let res = await userApi.getOffers(args);
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


export const AddDocument = createAsyncThunk<any, any, any>('addDocument', async (
    args, { rejectWithValue }
) => {
    try {
        let res = await userApi.addDocument(args);
        // alert(JSON.stringify(res))
        if (res?.data) {
            return res?.data;
        } else {
            return res;
        }
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const getAllusers = createAsyncThunk<any, any, any>('getAllusers', async (
    args, { rejectWithValue }
) => {
    try {
        let res = await userApi.getAllusers(args);
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


export const deleteDocument = createAsyncThunk<any, any, any>('deleteDocument', async (
    args, { rejectWithValue }
) => {
    try {
        let res = await userApi.deleteDocument(args);
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


export const GetAdminOffers = createAsyncThunk<any, any, any>('GetAdminOffers', async (
    args, { rejectWithValue }
) => {
    try {
        let res = await userApi.getAdminOffers(args);
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

export const addAdminOffers = createAsyncThunk<any, any, any>('addAdminOffers', async (
    args, { rejectWithValue }
) => {
    try {
        let res = await userApi.addAdminOffers(args);
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

export const editAdminOffers = createAsyncThunk<any, any, any>('editAdminOffers', async (
    args, { rejectWithValue }
) => {
    try {
        let res = await userApi.editAdminOffers(args);
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


export const deleteAdminOffers = createAsyncThunk<any, any, any>('deleteAdminOffers', async (
    args, { rejectWithValue }
) => {
    try {
        let res = await userApi.deleteAdminOffers(args);
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



export const addAdminForm3ml = createAsyncThunk<any, any, any>('addAdminForm3ml', async (
    args, { rejectWithValue }
) => {
    try {
        let res = await userApi.addAdminForm3ml(args);
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

export const changeAdminForm3ml = createAsyncThunk<any, any, any>('changepasswordsuperadmin', async (
    args, { rejectWithValue }
) => {
    try {
        let res = await userApi.changepasswordsuperadmin(args);
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

export const changeUserForm3ml = createAsyncThunk<any, any, any>('changeUserForm3ml', async (
    args, { rejectWithValue }
) => {
    try {
        let res = await userApi.changeUserForm3ml(args);
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


export const addNewM3ml = createAsyncThunk<any, any, any>('addNewM3ml', async (
    args, { rejectWithValue }
) => {
    try {
        let res = await userApi.addNewM3ml(args);
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

export const activation = createAsyncThunk<any, any, any>('activation', async (
    args, { rejectWithValue }
) => {
    try {
        let res = await userApi.activation(args);
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

export const ListM3ml = createAsyncThunk<any, any, any>('ListM3ml', async (
    _, { rejectWithValue }
) => {
    try {
        let res = await userApi.ListM3ml();
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

export const ListUsers = createAsyncThunk<any, any, any>('ListUsers', async (
    name, { rejectWithValue }
) => {
    try {
        let res = await userApi.ListUsers(name);
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