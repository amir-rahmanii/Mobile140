import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/auth";
import newsLetter from "./newsLetter/newsLetter";
import isBasket from "./isBasket/isBasket";
import isNavBar from "./isNavBar/isNavBar.js";

export default configureStore({
    reducer: {
        auth,
        newsLetter,
        isBasket,
        isNavBar
    },
    devTools: true
})
