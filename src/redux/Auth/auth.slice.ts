import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./types";
import { Login, LoginAdmin, editFactory, Register, checkResetPassword, forgetPassword, resetPassword, verifyRegist } from "./auth.actions";
// import Toast from 'react-native-toast-message'
import { setAuthToken } from "../apis/api";
import { EditPassword, EditPasswordAdmin, EditProfile } from "../User/user.actions";
import Toast from "react-native-root-toast";
import { Platform } from "react-native";

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => initialState,
    changeloading: (state, action) => { state.loading = action.payload },
    changeAuth: (state, action) => { state.isAuth = action.payload },
    changeSecure: (state, action) => { state.secure = action.payload },
    changeforgot: (state, action) => { state.forgot = action.payload },
    changeregisted: (state, action) => { state.registed = action.payload },
    changereset: (state, action) => { state.reset = action.payload },
    changeChanged: (state, action) => { state.Changed = action.payload },
    changeNoActive: (state, action) => { state.noactive = action.payload },
    changeIntroStatus: (state, action) => { state.Intro = action.payload },
  },
  extraReducers: (builder) => {
    //Login
    builder.addCase(Login.fulfilled, (state, action: any) => {
      state.loading = false
      console.warn(JSON.stringify(action.payload))
      if (action.payload?.status) {
        if (action.payload?.data?.verified) {
          state.isAuth = true
          state.Admin = false
          state.user = action.payload.data
          setAuthToken(action.payload?.data?.token)
        } else {
          state.forgot = true
        }
      } else {
        console.warn(JSON.stringify(action.payload.status))
        Toast.show(action.payload?.msg, {
          duration: Toast.durations.LONG,
          position: Toast.positions.TOP,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
          containerStyle: {
            marginTop: Platform.OS == 'ios' ? 22 : 0,
            backgroundColor: '#f00'
          }
        })
      }
    })
    builder.addCase(Login.pending, (state) => {
      state.loading = true
    })
    builder.addCase(Login.rejected, (state, action: any) => {
      state.loading = false
      Toast.show(action.payload?.msg, {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        containerStyle: {
          marginTop: Platform.OS == 'ios' ? 22 : 0,
          backgroundColor: '#f00'
        }
      })
    })

    //Login
    builder.addCase(LoginAdmin.fulfilled, (state, action: any) => {
      state.loading = false
      // console.warn(JSON.stringify(action.payload))

      if (action.payload?.status) {
        if (action.payload.data.data_of_factory.active == 1) {
          state.isAuth = true
          state.Admin = true
          state.userAdmin = action.payload.data
          setAuthToken(action.payload?.data?.token)
        } else {
          state.noactive = true
        }
      } else {
        Toast.show(action.payload?.msg, {
          duration: Toast.durations.LONG,
          position: Toast.positions.TOP,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
          containerStyle: {
            marginTop: Platform.OS == 'ios' ? 22 : 0,
            backgroundColor: '#f00'
          }
        })
      }


    })
    builder.addCase(LoginAdmin.pending, (state) => {
      state.loading = true
    })
    builder.addCase(LoginAdmin.rejected, (state, action: any) => {
      state.loading = false
      Toast.show(action.payload?.msg, {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        containerStyle: {
          marginTop: Platform.OS == 'ios' ? 22 : 0,
          backgroundColor: '#f00'
        }
      })
    })

    //Register
    builder.addCase(Register.fulfilled, (state, action: any) => {
      state.loading = false
      // console.warn(JSON.stringify(action.payload))
      if (action.payload.status) {
        state.isAuth = true
        state.Admin = false
        state.user = action.payload.data
        setAuthToken(action.payload?.data?.token)
      } else {
        Toast.show(action.payload?.msg, {
          duration: Toast.durations.LONG,
          position: Toast.positions.TOP,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
          containerStyle: {
            marginTop: Platform.OS == 'ios' ? 22 : 0,
            backgroundColor: '#f00'
          }
        })
      }
    })
    builder.addCase(Register.pending, (state) => {
      state.loading = true
    })
    builder.addCase(Register.rejected, (state, action: any) => {
      state.loading = false
      Toast.show(action.payload?.msg, {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        containerStyle: {
          marginTop: Platform.OS == 'ios' ? 22 : 0,
          backgroundColor: '#f00'
        }
      })
    })


    //forgetPassword
    builder.addCase(forgetPassword.fulfilled, (state, action: any) => {
      state.loading = false
      // console.warn(JSON.stringify(action.payload))
      if (action.payload.status) {
        state.forgot = true
      } else {
        Toast.show(action.payload?.msg, {
          duration: Toast.durations.LONG,
          position: Toast.positions.TOP,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
          containerStyle: {
            marginTop: Platform.OS == 'ios' ? 22 : 0,
            backgroundColor: '#f00'
          }
        })
      }
    })
    builder.addCase(forgetPassword.pending, (state) => {
      state.loading = true
    })
    builder.addCase(forgetPassword.rejected, (state, action: any) => {
      state.loading = false
      Toast.show(action.payload?.msg, {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        containerStyle: {
          marginTop: Platform.OS == 'ios' ? 22 : 0,
          backgroundColor: '#f00'
        }
      })
    })


    //verifyUser
    builder.addCase(verifyRegist.fulfilled, (state, action: any) => {
      state.loading = false
      // console.warn(JSON.stringify(action.payload))
      if (action.payload.status) {
        state.isAuth = true
        state.Admin = false
        state.user = action.payload.data
        setAuthToken(action.payload?.data?.token)
      } else {
        Toast.show(action.payload?.msg, {
          duration: Toast.durations.LONG,
          position: Toast.positions.TOP,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
          containerStyle: {
            marginTop: Platform.OS == 'ios' ? 22 : 0,
            backgroundColor: '#f00'
          }
        })
      }
    })
    builder.addCase(verifyRegist.pending, (state) => {
      state.loading = true
    })
    builder.addCase(verifyRegist.rejected, (state, action: any) => {
      state.loading = false
      // console.warn(JSON.stringify(action.payload))
      Toast.show(action.payload?.msg, {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        containerStyle: {
          marginTop: Platform.OS == 'ios' ? 22 : 0,
          backgroundColor: '#f00'
        }
      })
    })


    //checkResetPassword
    builder.addCase(checkResetPassword.fulfilled, (state, action: any) => {
      state.loading = false
      // console.warn(JSON.stringify(action.payload))
      if (action.payload.status) {
        state.reset = true
      } else {
        Toast.show(action.payload?.msg, {
          duration: Toast.durations.LONG,
          position: Toast.positions.TOP,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
          containerStyle: {
            marginTop: Platform.OS == 'ios' ? 22 : 0,
            backgroundColor: '#f00'
          }
        })
      }
    })
    builder.addCase(checkResetPassword.pending, (state) => {
      state.loading = true
    })
    builder.addCase(checkResetPassword.rejected, (state, action: any) => {
      state.loading = false
      // console.warn(JSON.stringify(action.payload))
      Toast.show(action.payload?.msg, {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        containerStyle: {
          marginTop: Platform.OS == 'ios' ? 22 : 0,
          backgroundColor: '#f00'
        }
      })
    })

    //verifyUser
    builder.addCase(resetPassword.fulfilled, (state, action: any) => {
      state.loading = false
      // console.warn(JSON.stringify(action.payload))
      if (action.payload.status) {
        state.isAuth = true
        state.Admin = false
        state.user = action.payload.data
        setAuthToken(action.payload?.data?.token)
      } else {
        Toast.show(action.payload?.msg, {
          duration: Toast.durations.LONG,
          position: Toast.positions.TOP,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
          containerStyle: {
            marginTop: Platform.OS == 'ios' ? 22 : 0,
            backgroundColor: '#f00'
          }
        })
      }
    })
    builder.addCase(resetPassword.pending, (state) => {
      state.loading = true
    })
    builder.addCase(resetPassword.rejected, (state, action: any) => {
      state.loading = false
      // console.warn(JSON.stringify(action.payload))
      Toast.show(action.payload?.msg, {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        containerStyle: {
          marginTop: Platform.OS == 'ios' ? 22 : 0,
          backgroundColor: '#f00'
        }
      })
    })

    EditProfile
    builder.addCase(EditProfile.fulfilled, (state, action: any) => {
      state.loading = false
      console.log(JSON.stringify(action.payload.data))
      if (action.payload?.status) {
        state.Changed = true
        state.user = action.payload?.data
        Toast.show(action.payload?.msg, {
          duration: Toast.durations.LONG,
          position: Toast.positions.TOP,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
          containerStyle: {
            marginTop: Platform.OS == 'ios' ? 22 : 0,
            backgroundColor: 'green'
          }
        })
      } else {
        Toast.show(action.payload?.msg, {
          duration: Toast.durations.LONG,
          position: Toast.positions.TOP,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
          containerStyle: {
            marginTop: Platform.OS == 'ios' ? 22 : 0,
            backgroundColor: '#f00'
          }
        })
      }
    })
    builder.addCase(EditProfile.pending, (state) => {
      state.loading = true
    })
    builder.addCase(EditProfile.rejected, (state, action: any) => {
      state.loading = false
      Toast.show(action.payload?.msg, {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        containerStyle: {
          marginTop: Platform.OS == 'ios' ? 22 : 0,
          backgroundColor: '#f00'
        }
      })
    })

    //EditPassword
    builder.addCase(EditPassword.fulfilled, (state, action: any) => {
      state.loading = false
      console.log(JSON.stringify(action.payload.data))
      if (action.payload?.status) {
        state.Changed = true
        // state.user = action.payload?.data
        Toast.show(action.payload?.msg, {
          duration: Toast.durations.LONG,
          position: Toast.positions.TOP,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
          containerStyle: {
            marginTop: Platform.OS == 'ios' ? 22 : 0,
            backgroundColor: 'green'
          }
        })
      } else {
        Toast.show(action.payload?.msg, {
          duration: Toast.durations.LONG,
          position: Toast.positions.TOP,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
          containerStyle: {
            marginTop: Platform.OS == 'ios' ? 22 : 0,
            backgroundColor: '#f00'
          }
        })
      }
    })
    builder.addCase(EditPassword.pending, (state) => {
      state.loading = true
    })
    builder.addCase(EditPassword.rejected, (state, action: any) => {
      state.loading = false
      Toast.show(action.payload?.msg, {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        containerStyle: {
          marginTop: Platform.OS == 'ios' ? 22 : 0,
          backgroundColor: '#f00'
        }
      })
    })

    //EditPassword
    builder.addCase(EditPasswordAdmin.fulfilled, (state, action: any) => {
      state.loading = false
      console.log(JSON.stringify(action.payload.data))
      if (action.payload?.status) {
        state.Changed = true
        // state.user = action.payload?.data
        Toast.show(action.payload?.msg, {
          duration: Toast.durations.LONG,
          position: Toast.positions.TOP,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
          containerStyle: {
            marginTop: Platform.OS == 'ios' ? 22 : 0,
            backgroundColor: 'green'
          }
        })
      } else {
        Toast.show(action.payload?.msg, {
          duration: Toast.durations.LONG,
          position: Toast.positions.TOP,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
          containerStyle: {
            marginTop: Platform.OS == 'ios' ? 22 : 0,
            backgroundColor: '#f00'
          }
        })
      }
    })
    builder.addCase(EditPasswordAdmin.pending, (state) => {
      state.loading = true
    })
    builder.addCase(EditPasswordAdmin.rejected, (state, action: any) => {
      state.loading = false
      Toast.show(action.payload?.msg, {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        containerStyle: {
          marginTop: Platform.OS == 'ios' ? 22 : 0,
          backgroundColor: '#f00'
        }
      })
    })

    //editFactory
    builder.addCase(editFactory.fulfilled, (state, action: any) => {
      state.loading = false
      if (action.payload?.status) {
        // console.log(action.payload?.msg)
        state.userAdmin.data_of_factory = action.payload?.data
        Toast.show(action.payload?.msg, {
          duration: Toast.durations.LONG,
          position: Toast.positions.TOP,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
          containerStyle: {
            marginTop: Platform.OS == 'ios' ? 22 : 0,
            backgroundColor: 'green',
          }
        })
      } else {
        Toast.show(action.payload?.msg, {
          duration: Toast.durations.LONG,
          position: Toast.positions.TOP,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
          containerStyle: {
            marginTop: Platform.OS == 'ios' ? 22 : 0,
            backgroundColor: '#f00'
          }
        })
      }
    })
    builder.addCase(editFactory.pending, (state) => {
      state.loading = true
    })
    builder.addCase(editFactory.rejected, (state, action: any) => {
      state.loading = false
      Toast.show(action.payload?.msg, {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        containerStyle: {
          marginTop: Platform.OS == 'ios' ? 22 : 0,
          backgroundColor: '#f00'
        }
      })
    })

  }
});

export const {
  changeloading,
  logout,
  changeSecure,
  changeforgot,
  changeregisted,
  changereset,
  changeChanged,
  changeIntroStatus,
  changeNoActive,
  changeAuth
} = authSlice.actions;

export default authSlice.reducer;
