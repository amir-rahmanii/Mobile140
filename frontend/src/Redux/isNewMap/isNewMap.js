import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name: "isNewMap",
    initialState: {
        status: false,
    },
    reducers: {
        isOpenNewMap: (state) => {
            state.status = true;
        },
        isCloseNewMap: (state) => {
            state.status = false;
        }
    }
});

export const { isOpenNewMap, isCloseNewMap } = slice.actions;
export default slice.reducer