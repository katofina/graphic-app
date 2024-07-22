import { createSlice } from "@reduxjs/toolkit";

const initialState = {auth: false, name: '', email: ''};

const sign = createSlice({
    name: "sign",
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.auth = action.payload.auth;
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
    },
});

export default sign;
