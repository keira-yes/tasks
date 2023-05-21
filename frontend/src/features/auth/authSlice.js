import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoading: false
}

export const registerAsync = createAsyncThunk(
    "auth/register",
    async user => {
        console.log(user)
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
});

export const {} = authSlice.actions;
export default authSlice.reducer;