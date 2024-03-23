import {configureStore} from "@reduxjs/toolkit";
import darkmodeReducer from './theme/darkmodeSlice'

const store = configureStore({
    reducer:{
        darkmode: darkmodeReducer
    }
})

export default store