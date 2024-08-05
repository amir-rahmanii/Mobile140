import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/auth";
import newsLetter from "./newsLetter/newsLetter";

export default configureStore({
    reducer : {
        auth,
        newsLetter
    },
    devTools: true
})
