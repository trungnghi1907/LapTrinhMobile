import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  introText: "A premium online store for sporter and their stylish choice",
  shopName: "POWER BIKE SHOP",
  products: [
    {
      id: 1,
      img: require("../assets/bifour_-removebg-preview.png"),
      name: "Pinarello",
      price: 1800,
      Description:
        "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
      discount: "15%",
      type: "MT",
    },
   {
    id: 2,
    img: require("../assets/bione-removebg-preview.png"),
    name: "Pina Moutain",
    price: 1700,
    Description:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    discount: "15%",
    type: "MT",
  },
  {
    id: 3,
    img: require("../assets/bithree_removebg-preview.png"),
    name: "Pina Bike",
    price: 1500,
    Description:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    discount: "15%",
    type: "RB",
  },
  {
    id: 4,
    img: require("../assets/bitwo-removebg-preview.png"),
    name: "Pinarello",
    price: 1900,
    Description:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    discount: "15%",
    type: "RB",
  },
  {
    id: 5,
    img: require("../assets/bithree_removebg-preview.png"),
    name: "Pinarello",
    price: 2700,
    Description:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    discount: "15%",
    type: "RB",
  },
  {
    id: 6,
    img: require("../assets/bifour_-removebg-preview.png"),
    name: "Pinarello",
    price: 1350,
    Description:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    discount: "15%",
    type: "MT",
  },
  ],
  cart: [],
  cartCount: 0,
  filterType: "All",
  filteredProducts: [], // Hoặc `filteredProducts: [...initialState.products]`
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      const type = action.payload;
      state.filterType = type;
      state.filteredProducts =
        type === "All"
          ? state.products
          : state.products.filter((product) => product.type === type);
    },
    addToCart: (state, action) => {
      const productExists = state.cart.find((item) => item.id === action.payload.id);
      if (!productExists) {
        state.cart.push(action.payload);
        state.cartCount += 1;
      }
      console.log("Số lượng giỏ hàng hiện tại:", state.cartCount);
    },
  },
});

export const { filterProducts, addToCart } = productSlice.actions;
export default productSlice.reducer;
