import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GetCategoryService } from '../../services/CategoryService'

const initialState = {
    category : {},
    selected : {}
};

export const get = createAsyncThunk(
    "category/get",
    async () => {
        const res = await GetCategoryService();

        return res;
    }
)

export const selected = createAsyncThunk(
    "category/selected",
    async (id) => {
        const res = await GetCategoryService(id);

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
        [selected.fulfilled]: (state, action) => {
            state.selected = action.payload;
        }
    }
})

const { reducer } = categorySlide;

export default reducer;