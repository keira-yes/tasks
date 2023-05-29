import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "./authAPI";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
    user: user || null,
    isLoading: false,
    isSuccess: false,
    errorMessage: ""
}

export const registerAsync = createAsyncThunk(
    "auth/register",
    async (user, thunkAPI) => {
        try {
            return await authAPI.register(user);
        } catch (error) {
            const message = error.response?.data?.message || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
)

export const loginAsync = createAsyncThunk(
    "auth/login",
    async (user) => {
        try {
            console.log(user)
        } catch (error) {
            console.log("error", error)
        }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.errorMessage = ""
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(registerAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.errorMessage = action.payload;
            })
    }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;