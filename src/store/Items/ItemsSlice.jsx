import { createSlice } from "@reduxjs/toolkit";

const Items = createSlice({
  name: "items",
  initialState: {
    categories: [
      { id: 1, path: "tshirts", title: "T-Shirts" },
      { id: 2, path: "shoes", title: "Shoes" },
      { id: 3, path: "pants", title: "Pants" },
      { id: 4, path: "jakets", title: "Jakets" },
    ],
    tshirts: [
      {
        id:  1,
        price: 1,
        title: "GUCCI 2022G Summer Brand",
        img: "/tshirt.jpg",
        type: "tshirts",
        gallery: [
          { img: 1, link: "/tshirt1.jpg" },
          { img: 2, link: "/tshirt2.jpg" },
        ],
        sizes: ["L", "XL", "XXL"],
        color: "Black",
        added: false,
        descr:
          "Sneaker in air mesh and suede goatskin. Light sole with contrasting design for a versatile and modern look.",
      },
      {
        id: 2,
        price: 2,
        title: "GUCCI 2022G Summer",
        img: "/tshirt.jpg",
        type: "tshirts",
        gallery: [
          { img: 1, link: "/tshirt1.jpg" },
          { img: 2, link: "/tshirt2.jpg" },
        ],
        sizes: ["L", "XL", "XXL"],
        color: "Black",
        added: false,
        descr:
          "Sneaker in air mesh and suede goatskin. Light sole with contrasting design for a versatile and modern look.",
      },
      {
        id: 3,
        price: 3,
        title: "GUCCI 2022G Brand",
        img: "/tshirt.jpg",
        type: "tshirts",
        gallery: [
          { img: 1, link: "/tshirt1.jpg" },
          { img: 2, link: "/tshirt2.jpg" },
        ],
        sizes: ["L", "XL", "XXL"],
        color: "Black",
        added: false,
        descr:
          "Sneaker in air mesh and suede goatskin. Light sole with contrasting design for a versatile and modern look.",
      },
    ],
    shoes: [
      {
        id: 1,
        price: 1,
        title: "Shoes GUCCI 2022G Summer Brand",
        img: "/shoes.jpg",
        type: "shoes",
        gallery: [
          { img: 1, link: "/tshirt1.jpg" },
          { img: 2, link: "/tshirt2.jpg" },
        ],
        sizes: ["L", "XL", "XXL"],
        color: "Black",
        added: "false",
        descr:
          "Sneaker in air mesh and suede goatskin. Light sole with contrasting design for a versatile and modern look.",
      },
      {
        id: 2,
        price: 2,
        title: "Shoes GUCCI 2022G Summer ",
        img: "/shoes.jpg",
        type: "shoes",
        gallery: [
          { img: 1, link: "/tshirt1.jpg" },
          { img: 2, link: "/tshirt2.jpg" },
        ],
        sizes: ["L", "XL", "XXL"],
        color: "Black",
        added: "false",
        descr:
          "Sneaker in air mesh and suede goatskin. Light sole with contrasting design for a versatile and modern look.",
      },
      {
        id: 3,
        price: 3,
        title: "Shoes GUCCI 2022G Brand",
        img: "/shoes.jpg",
        type: "shoes",
        gallery: [
          { img: 1, link: "/tshirt1.jpg" },
          { img: 2, link: "/tshirt2.jpg" },
        ],
        sizes: ["L", "XL", "XXL"],
        color: "Black",
        added: "false",
        descr:
          "Sneaker in air mesh and suede goatskin. Light sole with contrasting design for a versatile and modern look.",
      },
    ],
    pants: [
      {
        id: 1,
        price: 1,
        title: "Pants GUCCI 2022G Summer Brand",
        img: "/pants.jpg",
        type: "pants",
        gallery: [
          { img: 1, link: "/tshirt1.jpg" },
          { img: 2, link: "/tshirt2.jpg" },
        ],
        sizes: ["L", "XL", "XXL"],
        color: "Black",
        added: "false",
        descr:
          "Sneaker in air mesh and suede goatskin. Light sole with contrasting design for a versatile and modern look.",
      },
      {
        id: 2,
        price: 2,
        title: "Pants GUCCI 2022G Summer ",
        img: "/pants.jpg",
        type: "pants",
        gallery: [
          { img: 1, link: "/tshirt1.jpg" },
          { img: 2, link: "/tshirt2.jpg" },
        ],
        sizes: ["L", "XL", "XXL"],
        color: "Black",
        added: "false",
        descr:
          "Sneaker in air mesh and suede goatskin. Light sole with contrasting design for a versatile and modern look.",
      },
      {
        id: 3,
        price: 3,
        title: "Pants GUCCI 2022G Brand",
        img: "/pants.jpg",
        type: "pants",
        gallery: [
          { img: 1, link: "/tshirt1.jpg" },
          { img: 2, link: "/tshirt2.jpg" },
        ],
        sizes: ["L", "XL", "XXL"],
        color: "Black",
        added: "false",
        descr:
          "Sneaker in air mesh and suede goatskin. Light sole with contrasting design for a versatile and modern look.",
      },
    ],
    jakets: [
      {
        id: 1,
        price: 1,
        title: "Pants GUCCI 2022G Summer Brand",
        img: "/pants.jpg",
        type: "jakets",
        gallery: [
          { img: 1, link: "/tshirt1.jpg" },
          { img: 2, link: "/tshirt2.jpg" },
        ],
        sizes: ["L", "XL", "XXL"],
        color: "Black",
        added: "false",
        descr:
          "Sneaker in air mesh and suede goatskin. Light sole with contrasting design for a versatile and modern look.",
      },
      {
        id: 2,
        price: 2,
        title: "Pants GUCCI 2022G Summer ",
        img: "/pants.jpg",
        type: "jakets",
        gallery: [
          { img: 1, link: "/tshirt1.jpg" },
          { img: 2, link: "/tshirt2.jpg" },
        ],
        sizes: ["L", "XL", "XXL"],
        color: "Black",
        added: "false",
        descr:
          "Sneaker in air mesh and suede goatskin. Light sole with contrasting design for a versatile and modern look.",
      },
      {
        id: 3,
        price: 3,
        title: "Pants GUCCI 2022G Brand",
        img: "/pants.jpg",
        type: "jakets",
        gallery: [
          { img: 1, link: "/tshirt1.jpg" },
          { img: 2, link: "/tshirt2.jpg" },
        ],
        sizes: ["L", "XL", "XXL"],
        color: "Black",
        added: "false",
        descr:
          "Sneaker in air mesh and suede goatskin. Light sole with contrasting design for a versatile and modern look.",
      },
    ],
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
      state.cart = state.cart.filter((i) =>( i.id && i.title) !== (action.payload.id && action.payload.title))
    },
  },
});
export const { addActiveItem, addActiveImg, addItemInCart, removeItem } =
  Items.actions;
export default Items.reducer;
