import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../CONSTANTS/URL";

export const getItems = createAsyncThunk(
  "items/getItems",
  async function (category ) {
  const respons = await fetch(`${BASE_URL}/${category}`)
  const res = await respons.json()
  return res
});

const Items = createSlice({
  name: "items",
  initialState: {
    categories: [
      { id: 1, path: "tshirts", title: "T-Shirts" },
      { id: 2, path: "shoes", title: "Shoes" },
      { id: 3, path: "pants", title: "Pants" },
      { id: 4, path: "jakets", title: "Jakets" },
    ],
    itemsArray : [],
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getItems.fulfilled , (state, action) => {
      state.itemsArray = action.payload})
  },
});

export default Items.reducer;
