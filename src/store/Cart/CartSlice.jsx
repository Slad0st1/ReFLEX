import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name : 'cart',
    initialState : {
        isOpen : false,
        cart : []
    },
    reducers : {
        openOrHideCart(state){
            state.isOpen =  !state.isOpen
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
})

export const {addItemInCart, removeItem , openOrHideCart } = CartSlice.actions;
export default CartSlice.reducer