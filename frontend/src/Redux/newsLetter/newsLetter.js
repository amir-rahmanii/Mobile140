import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiRequest from "../../Services/Axios/axios";


export const createNewsLetter = createAsyncThunk("newsLetter/createNewsLetterToServer", async (email) => {
    try {
        const response = await apiRequest.post("newsletter", email)
        console.log(response);
        const data = await response.data
        console.log(data);
        return data

    } catch (error) {
        console.log(error);
    }

})


const slice = createSlice({
    name: "auth",
    initialState: [],
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(createNewsLetter.fulfilled, (state, action) => {
            console.log(action.payload);
            state.push(action.payload)
        })
    }
})


export default slice.reducer