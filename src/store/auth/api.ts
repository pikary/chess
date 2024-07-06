import { createAsyncThunk } from "@reduxjs/toolkit";
import baseRequest from "../../utils/baseApi";
import { User } from "./types";

interface Response<T> {
	message: string;
	result: T;
}

export const registerApiCall = createAsyncThunk<User|undefined, User, {rejectValue:string}>('user/register', async(reqBody,thunk)=>{
    try{
        const result = await baseRequest<Response<User>>('POST', 'register',reqBody)
        return result?.result
    }catch(e){
        return thunk.rejectWithValue((e as Error).message)
    }
})

export const loginApiCall = createAsyncThunk<User|undefined, User, {rejectValue:string}>('user/login', async(reqBody,thunk)=>{
    try{
        const result = await baseRequest<Response<User>>('POST', 'login',reqBody)
        return result?.result
    }catch(e){
        return thunk.rejectWithValue((e as Error).message)
    }
})
