import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/auth";

export default configureStore({
    reducer : {
        auth
    },
    devTools: true
})
