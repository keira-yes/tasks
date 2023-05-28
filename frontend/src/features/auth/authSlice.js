import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "./authAPI";

const initialState = {
    user: null,
    isLoading: false,
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
    async user => {
        try {
            console.log(user)
        } catch (error) {
            console.log("error", error)
            // const message = error.response;
            // console.log(message)
        }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(registerAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.errorMessage = action.payload;
            })
    }
});

// export const {} = authSlice.actions;
export default authSlice.reducer;