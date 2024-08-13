import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiRequest from "../../Services/Axios/axios";


export const getProvincesFromServer = createAsyncThunk("provinces/getProvincesFromServer", async () => {
    try {
        const response = await apiRequest.get("provinces")
        const data = await response.data
        return data

    } catch (error) {
        console.log(error);
    }

})




const slice = createSlice({
    name: "provinces",
    initialState: [],
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getProvincesFromServer.fulfilled, (state, action) => {
            state.push(...action.payload) 
        })
    }
})


export default slice.reducer