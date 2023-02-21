import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {LoginService} from '../../../../view/src/services/AuthService'

const initialState = {
    user : {},
    isLoggedIn : false
};

export const login = createAsyncThunk(
    "auth/login",
    async ({email, password}) => {
        const res = await LoginService({email, password});

        return res;
    }
)

const authSlide = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            state.user = action.payload ;
            state.isLoggedIn = true;
        },
    }
})

const { reducer } = authSlide;

export default reducer;