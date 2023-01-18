import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
    category: string;
}

const initialState: ProductState = {
    category: "allProducts",
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setCategory(state, action: PayloadAction<string>) {
            state.category = action.payload;
        }
    },
});

export default productSlice.reducer;