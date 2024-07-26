import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Brush from "../components/main/Canvas/tools/Brush";
import Circle from "../components/main/Canvas/tools/Circle";
import Rubber from "../components/main/Canvas/tools/Rubber";
import Line from "../components/main/Canvas/tools/Line";
import Square from "../components/main/Canvas/tools/Square";

export type Tool = Brush | Circle | Square | Line | Rubber;

export interface Option {
  option: Tool;
  fillColor: string;
  filling: boolean;
  strokeColor: string;
  width: string;
  constructor: string;
}

const initialState: Option = {
  option: null,
  constructor: "",
  fillColor: "",
  filling: false,
  strokeColor: "",
  width: "1",
};

const option = createSlice({
  name: "option",
  initialState,
  reducers: {
    setOption: (
      state,
      action: PayloadAction<Brush | Circle | Rubber | Line | Square>,
    ) => {
      state = Object.assign(state, { option: action.payload });
      state.constructor = action.payload.constructor.name;
    },

    setFillColor: (state, action: PayloadAction<string>) => {
      state.fillColor = action.payload;
    },

    setFilling: (state, action: PayloadAction<boolean>) => {
      state.filling = action.payload;
    },

    setStrokeColor: (state, action: PayloadAction<string>) => {
      state.strokeColor = action.payload;
    },

    setLineWidth: (state, action: PayloadAction<string>) => {
      state.width = action.payload;
    },
  },
});

export default option;
