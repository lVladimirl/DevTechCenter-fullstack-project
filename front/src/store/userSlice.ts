import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name:"userSlicer",
    initialState:{
        userName:"Pedrinho",
        tech:[{id:"tech1ID", name: "Typescript", status:"junior"},{id:"tech2ID", name: "Python", status:"junior"}],
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