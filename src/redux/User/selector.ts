import { RootState } from "../store";
export const selectFindLab = (state: RootState) => state.user.findLab;
export const selectLoading = (state: RootState) => state.user.loading;
export const selectLab = (state: RootState) => state.user.Lab;
export const selectImages = (state: RootState) => state.user.Images;
export const selectOffers = (state: RootState) => state.user.Offers;
export const selectUploaded = (state: RootState) => state.user.uploaded;
export const selectAllUsers = (state: RootState) => state.user.users;
export const selectdeleteloading = (state: RootState) => state.user.deleteloading;
export const selectAdded = (state: RootState) => state.user.added;
export const selectAllM3ml = (state: RootState) => state.user.AllM3ml;
export const selectAllUserss = (state: RootState) => state.user.AllUsers;


