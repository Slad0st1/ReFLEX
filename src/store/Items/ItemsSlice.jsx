import { createSlice } from "@reduxjs/toolkit";
import { T_SHIRTS_MOCKUP, SHOES_MOCK, PANTS_MOCK } from "../../__mock/tshirts";

const Items = createSlice({
  name: "items",
  initialState: {
    categories: [
      { id: 1, name: "tshirts", title: "T-Shirts" },
      { id: 2, name: "shoes", title: "Shoes" },
      { id: 3, name: "pants", title: "Pants" },
    ],
    tshirts: T_SHIRTS_MOCKUP,
    shoes: SHOES_MOCK,
    pants: PANTS_MOCK,
    activeItem: {},
    cart: [],
  },
  reducers: {
    addActiveItem(state, action) {
      state.activeItem = action.payload;
    },
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
});
export const { addActiveItem, addActiveImg, addItemInCart, removeItem } =
  Items.actions;
export default Items.reducer;
