import { createSlice } from '@reduxjs/toolkit'

const demo = createSlice({
    name: 'demo',
    initialState: [],
    reducers: {
        createDemo: (state, action) => {
            state.push(action.payload);
        }
    }
})

const { reducer, actions } = demo;

export const { createDemo } = actions;
export default reducer;