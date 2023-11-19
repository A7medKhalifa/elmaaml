import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./types";
import { AddDocument, FindLab, GetAdminOffers, GetOffers, ListM3ml, ListUsers, ShowAdminResults, ShowResults, activation, addAdminForm3ml, addNewM3ml, changeAdminForm3ml, changeUserForm3ml, deleteProfile, getAllusers, getProfile } from "./user.actions";
import Toast from "react-native-root-toast";
import { Platform } from "react-native";
import COLORS from "../../values/colors";
// import Toast from 'react-native-toast-message'

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: () => initialState,
    changeFindLab: (state, action) => { state.findLab = action.payload },
    changeLab: (state, action) => { state.Lab = action.payload },
    changeUploaded: (state, action) => { state.uploaded = action.payload },
    changeUsers: (state, action) => { state.users = action.payload },
    changeAdded: (state, action) => { state.added = action.payload },
  },
  extraReducers: (builder) => {
    builder.addCase(ListM3ml.fulfilled, (state, action: any) => {
      state.loading = false
      if (action.payload?.status == true) {
        state.AllM3ml = action.payload.data
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
    builder.addCase(ListM3ml.pending, (state) => {
      state.loading = true
    })

    builder.addCase(deleteProfile.fulfilled, (state, action: any) => {
      state.deleteloading = false
      if (action.payload?.status) {
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
    builder.addCase(deleteProfile.pending, (state) => {
      state.deleteloading = true
    })
    //getProfile
    builder.addCase(getProfile.fulfilled, (state, action: any) => {
      state.loading = false
      if (action.payload?.status) {
        state.users = action.payload.data
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
    //FindLab
    builder.addCase(FindLab.fulfilled, (state, action: any) => {
      state.loading = false
      if (action.payload?.status) {
        state.findLab = true
        state.Lab = action.payload.data
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
    builder.addCase(FindLab.pending, (state) => {
      state.loading = true
    })
    builder.addCase(FindLab.rejected, (state, action: any) => {
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

    //ShowResults
    builder.addCase(ListUsers.fulfilled, (state, action: any) => {
      state.loading = false
      if (action.payload?.status) {
        state.AllUsers = action.payload.data
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
    builder.addCase(ListUsers.pending, (state) => {
      state.loading = true
    })

    //ShowResults
    builder.addCase(ShowResults.fulfilled, (state, action: any) => {
      state.loading = false
      if (action.payload?.status) {
        state.Images = action.payload.data
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
    builder.addCase(ShowResults.pending, (state) => {
      state.loading = true
    })
    builder.addCase(ShowResults.rejected, (state, action: any) => {
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

    //ShowAdminResults
    builder.addCase(ShowAdminResults.fulfilled, (state, action: any) => {
      console.log(action.payload.status)
      state.loading = false
      if (action.payload?.status) {
        state.Images = action.payload.data
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
    builder.addCase(ShowAdminResults.pending, (state) => {
      state.loading = true
    })
    builder.addCase(ShowAdminResults.rejected, (state, action: any) => {
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

    //GetOffers
    builder.addCase(GetOffers.fulfilled, (state, action: any) => {
      state.loading = false
      if (action.payload?.status) {
        state.Offers = action.payload.data
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
    builder.addCase(GetOffers.pending, (state) => {
      state.loading = true
    })
    builder.addCase(GetOffers.rejected, (state, action: any) => {
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

    //GetAdminOffers
    builder.addCase(GetAdminOffers.fulfilled, (state, action: any) => {
      state.loading = false
      if (action.payload?.status) {
        state.Offers = action.payload.data
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
    builder.addCase(GetAdminOffers.pending, (state) => {
      state.loading = true
    })
    builder.addCase(GetAdminOffers.rejected, (state, action: any) => {
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


    //AddDocument
    builder.addCase(AddDocument.fulfilled, (state, action: any) => {
      state.loading = false
      if (action.payload?.status) {
        state.uploaded = true
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
    builder.addCase(AddDocument.pending, (state) => {
      state.loading = true
    })
    builder.addCase(AddDocument.rejected, (state, action: any) => {
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




    //getAllusers
    builder.addCase(getAllusers.fulfilled, (state, action: any) => {
      state.loading = false
      if (action.payload?.status) {
        state.users = action.payload.data
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
    builder.addCase(getAllusers.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getAllusers.rejected, (state, action: any) => {
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


    // addAdminForm3ml
    builder.addCase(addAdminForm3ml.fulfilled, (state, action: any) => {
      state.loading = false
      if (action.payload?.status) {
        state.added = true
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
    builder.addCase(addAdminForm3ml.pending, (state) => {
      state.loading = true
    })
    builder.addCase(addAdminForm3ml.rejected, (state, action: any) => {
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

    // changeUserForm3ml
    builder.addCase(changeUserForm3ml.fulfilled, (state, action: any) => {
      state.loading = false
      if (action.payload?.status) {
        state.added = true
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
    builder.addCase(changeUserForm3ml.pending, (state) => {
      state.loading = true
    })
    builder.addCase(changeUserForm3ml.rejected, (state, action: any) => {
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

    // addAdminForm3ml
    builder.addCase(changeAdminForm3ml.fulfilled, (state, action: any) => {
      state.loading = false
      if (action.payload?.status) {
        state.added = true
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
    builder.addCase(changeAdminForm3ml.pending, (state) => {
      state.loading = true
    })
    builder.addCase(changeAdminForm3ml.rejected, (state, action: any) => {
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

    // addNewM3ml
    builder.addCase(addNewM3ml.fulfilled, (state, action: any) => {
      state.loading = false
      if (action.payload?.status == true) {
        // alert(action.payload?.msg)
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
        state.added = true
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
    builder.addCase(addNewM3ml.pending, (state) => {
      state.loading = true
    })
    builder.addCase(addNewM3ml.rejected, (state, action: any) => {
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

    // activation
    builder.addCase(activation.fulfilled, (state, action: any) => {
      state.deleteloading = false
      if (action.payload?.status == true) {
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
        state.added = true
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
    builder.addCase(activation.pending, (state) => {
      state.deleteloading = true
    })
    builder.addCase(activation.rejected, (state, action: any) => {
      state.deleteloading = false
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
  logoutUser,
  changeFindLab,
  changeLab,
  changeUploaded,
  changeUsers,
  changeAdded,

} = userSlice.actions;

export default userSlice.reducer;
