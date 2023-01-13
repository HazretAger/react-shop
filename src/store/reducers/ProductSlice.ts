import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "../../types/Product";

interface ProductState {
    products: IProduct[];
}

const initialState: ProductState = {
    products: [],
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<Array<IProduct>>) {
            state.products = action.payload;
        }
    },
});

export default productSlice.reducer;