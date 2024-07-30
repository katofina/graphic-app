import { createSlice } from "@reduxjs/toolkit";

const initialState = { option: null, fillColor: null, filling: false,  strokeColor: null, width: 1};

const option = createSlice({
    name: "option",
    initialState,
    reducers: {
        setOption: (state, action) => {
            state.option = action.payload;
        },

        setFillColor: (state, action) => {
            state.fillColor = action.payload;
        },
        
        setFilling: (state, action) => {
            state.filling = action.payload;
        },

        setStrokeColor: (state, action) => {
            state.strokeColor = action.payload;
        },

        setLineWidth: (state, action) => {
            state.width = action.payload;
        }
    },
});

export default option;
