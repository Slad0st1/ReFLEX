import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../CONSTANTS/URL";

export const getItems = createAsyncThunk(
  "items/getItems", 
  async function (category) {
  const respons = await fetch(`${BASE_URL}${category}`)
  return respons.json();
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
    cart: [],
  },
  reducers: {
    addActiveImg(state, action) {
      state.activeItem.img = action.payload;
    },
    addItemInCart(state, action) {
      state.cart.push(action.payload);
    },
    removeItem(state, action) {
      state.cart = state.cart.filter(
        (i) => (i.id && i.title) !== (action.payload.id && action.payload.title)
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getItems.fulfilled , (state, action) => {
      state.itemsArray = action.payload})
  },
});
export const { addActiveItem, addActiveImg, addItemInCart, removeItem } =
  Items.actions;
export default Items.reducer;
