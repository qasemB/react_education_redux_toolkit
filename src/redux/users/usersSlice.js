import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    users : [],
    error: ''
}

export const getUsers = createAsyncThunk('user/getUsers',  ()=>{
    return new Promise((resolve, reject)=>{
        fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json())
            .then(res=>{
                setTimeout(()=>{
                    resolve(res)
                },10000)
            })
    })

})


const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: builder=>{
        builder.addCase(getUsers.pending, (state)=>{
            state.isLoading = true
        })
        builder.addCase(getUsers.fulfilled, (state, action)=>{
            state.isLoading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(getUsers.rejected, (state, action)=>{
            state.isLoading = false
            state.users = []
            state.error = action.error.message
        })
    }
})

export default userSlice.reducer;