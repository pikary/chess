import { createAsyncThunk } from "@reduxjs/toolkit";
import baseRequest from "../../utils/baseApi";
import { User } from "./types";
import { log } from "console";

interface Response<T> {
	message: string;
	result: T;
}

interface RegisterReqBoy{
    username:string,
    email:string,
    password:string
}
interface LoginReqBody{
    username:string,
    password:string
}

export const registerApiCall = createAsyncThunk<User|undefined, RegisterReqBoy, {rejectValue:string}>('user/register', async(reqBody,thunk)=>{
    try{
        const result = await baseRequest<Response<User>>('POST', 'auth/register',reqBody)
        console.log(result);
        
        return result?.result
    }catch(e){
        console.log(e);
        
        return thunk.rejectWithValue((e as Error).message)
    }
})

export const loginApiCall = createAsyncThunk<User|undefined, LoginReqBody, {rejectValue:string}>('user/login', async(reqBody,thunk)=>{
    try{
        const result = await baseRequest<Response<User>>('POST', 'auth/login',reqBody)
        return result?.result
    }catch(e){
        return thunk.rejectWithValue((e as Error).message)
    }
})

export const getMeApiCall = createAsyncThunk<User|undefined, null, {rejectValue:string}>('user/login', async(_,thunk)=>{
    try{
        const result = await baseRequest<Response<User>>('GET', 'auth/getMe',null)
        return result?.result
    }catch(e){
        return thunk.rejectWithValue((e as Error).message)
    }
})