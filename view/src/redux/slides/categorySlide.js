import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {GetCategoryService} from '../../services/CategoryService'

const initialState = {
    category : {}
};

export const get = createAsyncThunk(
    "category/get",
    async () => {
        const res = await GetCategoryService();

        return res;
    }
)

const categorySlide = createSlice({
    name: 'category',
    initialState,
    extraReducers: {
        [get.fulfilled]: (state, action) => {
            state.category = action.payload ;
        },
    }
})

const { reducer } = categorySlide;

export default reducer;