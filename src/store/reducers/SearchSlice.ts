import { IProduct } from "../../models/Product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
    products: IProduct[];
}

const initialState: SearchState = {
    products: [],
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<Array<IProduct>>) {
            state.products = action.payload;
        }
    },
});

export default searchSlice.reducer;