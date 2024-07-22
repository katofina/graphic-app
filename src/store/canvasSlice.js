import { createSlice } from "@reduxjs/toolkit";

const initialState = { canvas: null, allDo: [], cancelDo: [] };

const canvas = createSlice({
    name: "canvas",
    initialState,
    reducers: {
        setCanvas: (state, action) => {
            state.canvas = action.payload;
        },

        pushAllDo: (state, action) => {
            state.allDo.push(action.payload);
        },

        pushCancelDo: (state, action) => {
            state.cancelDo.push(action.payload);
            state.allDo.pop();
        },

        forwardDo: (state, action) => {
            state.allDo.push(action.payload);
            state.cancelDo.pop();
        }
    },
});

export default canvas;
