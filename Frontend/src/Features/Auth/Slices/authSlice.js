import { createSlice } from "@reduxjs/toolkit";


const authSlice=createSlice({
    name:"auth",
    initialState:{
        user:null,
        loading:true,
        error:null
    },
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload
            state.error=null
        },
        setError:(state,action)=>{
            state.error=action.payload
        },
        setLoading:(state,action)=>{
            state.loading=action.payload
        }
    }
})


export const {setError,setUser,setLoading}=authSlice.actions

export default authSlice.reducer