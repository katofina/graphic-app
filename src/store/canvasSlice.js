import { createSlice } from "@reduxjs/toolkit";

const initialState = { canvas: null,};

const canvas = createSlice({
    name: "canvas",
    initialState,
    reducers: {
        setCanvas: (state, action) => {
            state.canvas = action.payload;
        },
    },
});

export default canvas;
