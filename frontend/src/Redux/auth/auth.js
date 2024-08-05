import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiRequest from "../../Services/Axios/axios";
import { notify } from "../../App";
import Cookies from 'js-cookie'


export const authRegister = createAsyncThunk("auth/authRegisterToServer", async (ObjData) => {
    let status = "error";
    try {
        const response = await apiRequest.post("auth/register", ObjData)
        if (response.status === 201) {
            let status = "success"
            notify(status, "با موفقیت ثبت نام شدید")
            const data = await response.data
            return data
        } else if (response.status === 200) {
            response.data.confirmPassword && notify(status, response.data.confirmPassword);
            response.data.phone && notify(status, response.data.phone);
        }
    } catch (error) {
        error.response.data.status === 400 && notify(status, "با این ایمیل یا نام کاربری قبلا ثبت نام شده است.");
        error.response.data.status === 403 && notify(status, "شماره همراه مسدود شده است.");
        error.response.data.status === 500 && notify(status, "شماره همراه قبلا ثبت نام شده است.");
    }
})


export const authLogin = createAsyncThunk("auth/authLoginToServer", async (phone) => {
    let status = "error";
    try {
        const response = await apiRequest.post("auth/login", phone)
        if (response.status === 200) {
            const data = await response.data
            if (response.data.phone) {
                notify(status, response.data.phone); //err response phone
            } else {
                return data
            }
        }

    } catch (error) {
        error.response.data.status === 409 && notify(status, ".این شماره همراه ثبت نام نشده است")
        error.response.data.status === 406 && notify(status, "شما 3 بار تلاش کردید لطفا 15 دقیقه منتظر بمانید.")

    }


})

export const authVerify = createAsyncThunk("auth/authVerifyToServer", async (objData) => {
    let status = "error";
    console.log(objData);

    try {
        const response = await apiRequest.post("auth/verifyOtp", objData)
        if (response.status === 200) {
            let status = "success"
            notify(status, "با موفقیت ورود شدید")
            const data = await response.data;
            return data
        }
    } catch (error) {
        error.response.data.status === 408 && notify(status, "کد استفاده شده است دوباره تلاش کنید.")
        error.response.data.status === 409 && notify(status, "کد صحیح نمیباشد.")
        error.response.data.status === 410 && notify(status, "کد منقضی شده است. دوباره تلاش کنید.")


    }


})



const slice = createSlice({
    name: "auth",
    initialState: [],
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(authRegister.fulfilled, (state, action) => {

            console.log(action.payload);
            if (action.payload) {
                Cookies.set('token', action.payload.data.accessToken, { secure: true })
            }
        })

        builder.addCase(authLogin.fulfilled, (state, action) => {
            if (action.payload) {
                state.push(action.payload.succsess)
            } else {
                state.push(false)
            }
        })

        builder.addCase(authVerify.fulfilled, (state, action) => {
            console.log(action.payload);
            if (action.payload) {
                Cookies.set('token', action.payload.data, { secure: true })
            }
        })
    }
})


export default slice.reducer