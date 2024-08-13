import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/auth";
import newsLetter from "./newsLetter/newsLetter";
import isBasket from "./isBasket/isBasket";
import isNavBar from "./isNavBar/isNavBar.js";
import isNewMap from "./isNewMap/isNewMap.js";
import provinces from "./provinces/provinces.js";

export default configureStore({
    reducer: {
        auth,
        newsLetter,
        isBasket,
        isNavBar,
        isNewMap,
        provinces
    },
    devTools: true
})
