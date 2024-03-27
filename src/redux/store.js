import {configureStore} from "@reduxjs/toolkit";
import darkmodeReducer from './theme/darkmodeSlice'
import userReducer from './users/usersSlice'

const store = configureStore({
    reducer:{
        darkmode: darkmodeReducer,
        users: userReducer
    }
})

export default store