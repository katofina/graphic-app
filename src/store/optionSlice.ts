import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Option {
    option: object | null,
    fillColor: string,
    filling: boolean,
    strokeColor: string,
    width: string
}

const initialState: Option = { option: null, fillColor: '', filling: false,  strokeColor: '', width: '1'};

const option = createSlice({
    name: "option",
    initialState,
    reducers: {
        setOption: (state, action: PayloadAction<object>) => {
            state.option = action.payload;
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
        }
    },
});

export default option;
