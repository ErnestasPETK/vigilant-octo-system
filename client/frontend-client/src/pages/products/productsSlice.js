import { createSlice } from "@reduxjs/toolkit";
import getProductsFromServer from "./productsAPI";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { redirect } from "react-router-dom";

const initialState = {
  products: [],
  productCategories: [],
  filteredProducts: [],
  status: "idle",
  error: null,
};

export const fetchProductsFromAPI = createAsyncThunk(
  "products/fetchProducts",
  async (category = null) => {
    const response = await getProductsFromServer(category);
    return await response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterCategory: (state, action) => {
      let category = action.payload;
      category =
        category === "All"
          ? false
          : category != "All" && category
          ? category
          : false;

      category
        ? (state.filteredProducts = state.products.filter(
            (product) => product.category == category
          ))
        : (state.filteredProducts = state.products);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProductsFromAPI.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsFromAPI.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
        state.filteredProducts = [...state.products];
        state.productCategories = [
          ...new Set(state.products.map((obj) => obj.category)),
        ];
      })
      .addCase(fetchProductsFromAPI.rejected, (state, action) => {
        console.log("error");
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { productsAdded, filterCategory } = productsSlice.actions;

export const selectAllProducts = (state) => state.products.products;
export const selectFilteredProducts = (state) =>
  state.products.filteredProducts;
export const selectStatus = (state) => state.products.status;
export const selectError = (state) => state.products.error;
export const selectProductCategories = (state) =>
  state.products.productCategories;

export default productsSlice.reducer;
