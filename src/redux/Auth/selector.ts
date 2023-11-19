import { RootState } from "../store";
export const selectSecure = (state: RootState) => state.auth.secure;
export const selectLoading = (state: RootState) => state.auth.loading;
export const selectAuth = (state: RootState) => state.auth.isAuth;
export const selectisAdmin = (state: RootState) => state.auth.Admin;
export const selectforgot = (state: RootState) => state.auth.forgot;
export const selectUserData = (state: RootState) => state.auth.user;
export const selectAdminData = (state: RootState) => state.auth.userAdmin;
export const selectregisted = (state: RootState) => state.auth.registed;
export const selectreset = (state: RootState) => state.auth.reset;
export const selectChanged = (state: RootState) => state.auth.Changed;
export const selectIntro = (state: RootState) => state.auth.Intro;
export const selectNoActive = (state: RootState) => state.auth.noactive;

