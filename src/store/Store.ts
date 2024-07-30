import { configureStore } from "@reduxjs/toolkit";
import option from "./optionSlice";
import canvas from "./canvasSlice";
import saver from "./saver";
import { Canvas } from "./canvasSlice";
import { Option } from "./optionSlice";
import { GetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

export interface Store {
  option: Option;
  canvas: Canvas;
}

export const store = configureStore({
  reducer: {
    option: option.reducer,
    canvas: canvas.reducer,
  },
  middleware: (getDefaultMiddleware: GetDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["canvas/setCanvas", "option/setOption"],
        // Ignore these paths in the state
        ignoredPaths: ["canvas", "option"],
      },
    }).concat(saver);
  },
  devTools: true,
});
