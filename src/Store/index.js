import { configureStore } from "@reduxjs/toolkit";

import LoadingReducer from "./Loading/Loading";
import TokenReducer from "./Token/Token";

export default configureStore({
    reducer: {
        loading:LoadingReducer,
        token:TokenReducer
    }
});