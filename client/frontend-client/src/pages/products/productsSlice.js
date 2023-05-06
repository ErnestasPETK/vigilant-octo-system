import { createSlice } from "@reduxjs/toolkit";
import getProductsFromServer from "./productsAPI";

import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  status: "idle",
  error: null,
};

export const fetchProductsFromAPI = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await getProductsFromServer();
    return await response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsAdded: {
      reducer(state, action) {
        state.products.push(action.payload);
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProductsFromAPI.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsFromAPI.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = state.products.concat(action.payload.products);
      })
      .addCase(fetchProductsFromAPI.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { productsAdded } = productsSlice.actions;

export const selectAllProducts = (state) => state.products.products;
export const selectStatus = (state) => state.products.status;

export default productsSlice.reducer;
