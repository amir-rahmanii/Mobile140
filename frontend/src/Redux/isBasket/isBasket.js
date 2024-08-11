import { createSlice } from "@reduxjs/toolkit";



const slice = createSlice({
    name: "isBasket",
    initialState: {
        status: false,
    },
    reducers: {
        isOpenBasket: (state) => {
            state.status = true;
        },
        isCloseBasket: (state) => {
            state.status = false;
        }
    }
});

export const { isOpenBasket, isCloseBasket } = slice.actions;
export default slice.reducer