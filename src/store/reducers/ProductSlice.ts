import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "../../types/Product";

interface ProductState {
    // products: IProduct[];
    category: string;
}

const initialState: ProductState = {
    // products: [],
    category: "allCateory",
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // setProducts(state, action: PayloadAction<Array<IProduct>>) {
        //     state.products = action.payload;
        // }
        setCategory(state, action: PayloadAction<string>) {
            state.category = action.payload;
        }
    },
});

export default productSlice.reducer;