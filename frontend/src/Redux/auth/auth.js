import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiRequest from "../../Services/Axios/axios";
import { notify } from "../../App";


export const authRegister = createAsyncThunk("auth/authRegisterToServer", async (ObjData) => {
    try {
        const response = await apiRequest.post("auth/register", ObjData)
        console.log(response);
        if (response.status === 201) {
            const data = await response.data
            return data
        } else if (response.status === 200) {
            notify(response.data.confirmPassword)
        }
    } catch (error) {
        if (error.response.data.status === 400) {
            notify("با این ایمیل یا نام کاربری قبلا ثبت نام شده است.")
        } else if (error.response.data.status === 403) {
            notify("شماره همراه مسدود شده است.")
        }else{
            notify("شماره همراه قبلا ثبت نام شده است.")
        }
        
    }

})


const slice = createSlice({
    name: "auth",
    initialState: [],
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(authRegister.fulfilled, (state, action) => {
            notify("با موفقیت ثبت نام کردید")
        })
    }
})

export const { removeUser } = slice.actions
export default slice.reducer