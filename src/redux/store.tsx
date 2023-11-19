import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Auth/auth.slice";
import dummySlice from "./Dummy/dummy.slice";
import userSlice from "./User/user.slice";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth","user"],
};
const rootReducer = combineReducers({
  auth: authSlice,
  user:userSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
let persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
  ,
});
const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export { store, persistor };
