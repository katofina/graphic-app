import { configureStore } from "@reduxjs/toolkit";
import option from './optionSlice.ts';
import canvas from './canvasSlice.ts';
import saver from './saver.ts';
import { Canvas } from "./canvasSlice.ts";
import { Option } from "./optionSlice.ts";

export interface Store {
    option: Option,
    canvas: Canvas
}

export const store = configureStore({
    reducer: {
        option: option.reducer,
        canvas: canvas.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
            // Ignore these action types
            ignoredActions: ['canvas/setCanvas', 'option/setOption'],
            // Ignore these paths in the state
            ignoredPaths: ['canvas', 'option'],
            },
        }).concat(saver),
    devTools: true,
});