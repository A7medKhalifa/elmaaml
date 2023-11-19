import { RootState } from "../store";
export const selectPaperSize = (state: RootState) => state.dummy.PaperSizeModal;
export const selectLayout = (state: RootState) => state.dummy.LayoutModal;

export const selectLayoutOptions = (state: RootState) => state.dummy.Layout;
export const selectPaperSizeOptions = (state: RootState) => state.dummy.PaperSizes;

export const selectPaperSizeIndex = (state: RootState) => state.dummy.SelectedPaperSizeIndex
export const selectLayoutIndex = (state: RootState) => state.dummy.SelectedLayoutIndex

export const selectPdfLength = (state: RootState) => state.dummy.PdfLength
export const selectPdfPageIndex = (state: RootState) => state.dummy.PdfPageIndex
export const selectPicURI = (state: RootState) => state.dummy.PicURI
