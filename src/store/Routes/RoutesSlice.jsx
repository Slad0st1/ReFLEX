import { createSlice } from "@reduxjs/toolkit";

const Routes = createSlice({
  name: "routes",
  initialState: {
    pages: [
      {path: "tshirts" , title :'T-Shirts'},
      {path: "shoes" ,  title :'Shoes'},
      {path: "pants" ,  title :'Pants'},
    ],
  },
  reducers:{}
});

export default Routes.reducer
