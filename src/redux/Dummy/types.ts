interface authState {
  PaperSizeModal: boolean;
  LayoutModal: boolean;
  PdfLength: number;
  PicURI:any[]
  PdfPageIndex:number;
  PaperSizes: [
    { text: 'A4', value: [595, 842] },
    { text: 'A3', value: [842, 1191] },
    { text: 'B5', value: [499, 709] },
    { text: 'Legal', value: [612, 1009] },
    { text: 'Letter', value: [612, 791] },
    { text: 'Tabloid', value: [791, 1225] },
  ],
  SelectedPaperSizeIndex: any;
  SelectedLayoutIndex: any;
  Layout: [
    { text: 'portrait', value: '0deg' },
    { text: 'Landscape', value: '90deg' },
  ]
}

export const initialState: authState = {
  PaperSizeModal: false,
  LayoutModal: false,
  PdfLength:0,
  PicURI:[],
  PdfPageIndex:0,
  PaperSizes: [
    { text: 'A4', value: [595, 842] },
    { text: 'A3', value: [832, 1150] },
    { text: 'B5', value: [499, 709] },
    { text: 'Legal', value: [612, 1009] },
    { text: 'Letter', value: [612, 791] },
    { text: 'Tabloid', value: [791, 1225] },
  ],
  SelectedPaperSizeIndex: null,
  SelectedLayoutIndex:null,
  Layout: [
    { text: 'portrait', value: '0deg' },
    { text: 'Landscape', value: '90deg' },
  ]

}