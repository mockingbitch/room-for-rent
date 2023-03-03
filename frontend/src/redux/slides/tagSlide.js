import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GetTagService } from '../../services/TagService'

const initialState = {
    tag : {}
};

export const get = createAsyncThunk(
    "tag/get",
    async () => {
        const res = await GetTagService();

        return res;
    }
)


const tagSlide = createSlice({
    name: 'tag',
    initialState,
    extraReducers: {
        [get.fulfilled]: (state, action) => {
            state.tag = action.payload ;
        }
    }
})

const { reducer } = tagSlide;

export default reducer;