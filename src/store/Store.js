import { configureStore } from "@reduxjs/toolkit";
import option from './optionSlice.js';
import canvas from './canvasSlice.js';

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
        }),
    devTools: true,
});