import { createSlice } from '@reduxjs/toolkit';
import { User } from './types'
import { SliceState } from '../types';
import { registerApiCall, loginApiCall } from './api';

const initialState: SliceState<User | undefined> = {
    isLoading: false,
    data: undefined,
    error: undefined,
};

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(registerApiCall.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(registerApiCall.fulfilled, (state, action) => {
            console.log(action.payload);

            state.isLoading = false
            state.data = action.payload
            
            localStorage.setItem('access_token', action.payload?.access_token || '')
        })
        builder.addCase(registerApiCall.rejected, (state, action) => {
            console.log(action.payload);
            
            state.isLoading = false
            state.error = action.payload
        })
        builder.addCase(loginApiCall.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(loginApiCall.fulfilled, (state, action) => {
            console.log(action.payload);
            state.isLoading = false
            state.data = action.payload
            localStorage.setItem('access_token', action.payload?.access_token || '')

        })
        builder.addCase(loginApiCall.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    },

});

// export const {} = EducationSlice.actions;
export default UserSlice.reducer;
