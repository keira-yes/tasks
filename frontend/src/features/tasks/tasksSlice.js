import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tasksAPI from "./tasksAPI";

const initialState = {
    task: {},
    tasks: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: ""
}

export const createTask = createAsyncThunk(
    "tasks/createTask",
    async (taskData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await tasksAPI.createTask(taskData, token);
        } catch (error) {
            const message = error.response?.data?.message || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
)

const tasksSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: builder => {
        builder
            .addCase(createTask.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(createTask.rejected, (state, action) => {
                state.isLoading = false;
                state.errorMessage = action.payload
            })
    }
});

export const { reset } = tasksSlice.actions;
export default tasksSlice.reducer;
