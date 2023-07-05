import { createSlice } from "@reduxjs/toolkit";

const Items = createSlice({
  name: "items",
  initialState : {
    searchQuery: '',
    categori : '',
  },
  reducers: {
    addSearchQuery(state ,action){
        state.searchQuery = action.payload
    },
    addCategori(state ,action){
      state.categori = action.payload
  }
  },
});
export const {addSearchQuery , addCategori} = Items.actions
export default Items.reducer;