import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    darkmode: "light"
}

const darkmodeSlice = createSlice({
    name: "darkmode",
    initialState,
    reducers:{
        setDarkmode : (state)=>{
            state.darkmode = "dark"
        },
        setLightmode : (state)=>{
            state.darkmode = "light"
        },
        setTheme: (state, action)=>{
            state.darkmode = action.payload
        }
    }
})

export default darkmodeSlice.reducer
export const {setDarkmode, setLightmode, setTheme} = darkmodeSlice.actions