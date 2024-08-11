import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name: "isNavBar",
    initialState: {
        status: false,
    },
    reducers: {
        isOpenNavBar: (state) => {
            state.status = true;
        },
        isCloseNavBar: (state) => {
            state.status = false;
        }
    }
});

export const { isOpenNavBar, isCloseNavBar } = slice.actions;
export default slice.reducer