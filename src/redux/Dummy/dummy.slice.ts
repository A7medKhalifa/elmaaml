import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./types";

export const dummySlice = createSlice({
  name: "dummy",
  initialState,
  reducers: {
    changeLayout: (state, action) => { state.LayoutModal = action.payload },
    changePaperSize: (state, action) => { state.PaperSizeModal = action.payload },

    changePaperSizeIndex: (state, action) => { state.SelectedPaperSizeIndex = action.payload },
    changeLayoutIndex: (state, action) => { state.SelectedLayoutIndex = action.payload },
   
    changePdfLength: (state, action) => { state.PdfLength = action.payload },
    changePdfPageIndex: (state, action) => { state.PdfPageIndex = action.payload },
    changePicURI: (state, action) => { state.PicURI = action.payload },
  }
});

export const {
  changeLayout,
  changePaperSize,
  changeLayoutIndex,
  changePaperSizeIndex,
  changePdfLength,
  changePdfPageIndex,
  changePicURI
} = dummySlice.actions;

export default dummySlice.reducer;
