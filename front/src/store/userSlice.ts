import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name:"asd",
    initialState:{
        user:"",
        tech:[{id:"asdas", name: "tech1", status:"noob"},{id:"asd", name: "tech2", status:"noasdaob"}],
        isLogged: false,
    },
    reducers:{
        changeUser(state,{payload}){
            return {...state, isLogged:true, user:payload}
        },
        logout(state){
            return {...state,isLogged:false, user:""}
        }
    }
})
export const {changeUser, logout} = slice.actions

export default slice.reducer