import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface Canvas {
    canvas: object | null,
    allDo: string[],
    cancelDo: string[],
    save: string[]
}

const initialState: Canvas = { canvas: null, allDo: [], cancelDo: [], save: [] };

const canvas = createSlice({
    name: "canvas",
    initialState,
    reducers: {
        setCanvas: (state, action: PayloadAction<object>) => {
            state.canvas = action.payload;
        },

        pushAllDo: (state, action: PayloadAction<string>) => {
            state.allDo.push(action.payload);
        },

        pushCancelDo: (state, action: PayloadAction<string>) => {
            state.cancelDo.push(action.payload);
            state.allDo.pop();
        },

        forwardDo: (state, action: PayloadAction<string>) => {
            state.allDo.push(action.payload);
            state.cancelDo.pop();
        },

        pushSave: (state, action: PayloadAction<string>) => {
            state.save.push(action.payload);
        },

        clearSave: (state) => {
            state.save = [];
        }
    },
});

export default canvas;
