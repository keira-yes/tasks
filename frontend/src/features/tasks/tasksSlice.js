import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tasksAPI from "./tasksAPI";

const initialState = {
    tasks: [],
    task: {},
    isLoading: false,
    isSuccess: false,
    errorMessage: ""
}

export const createTask = createAsyncThunk(
    "tasks/create",
    async (taskData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await tasksAPI.createTask(taskData, token);
        } catch (error) {
            const message = error.response?.data?.message || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const getTasks = createAsyncThunk(
    "tasks/getAll",
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await tasksAPI.getTasks(token);
        } catch (error) {
            const message = error.response?.data?.message || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const getTask = createAsyncThunk(
    "tasks/get",
    async (taskId, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await tasksAPI.getTask(taskId, token);
        } catch (error) {
            const message = error.response?.data?.message || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const closeTask = createAsyncThunk(
    "tasks/close",
    async (taskId, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await tasksAPI.closeTask(taskId, token);
        } catch (error) {
            const message = error.response?.data?.message || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const deleteTask = createAsyncThunk(
    "tasks/delete",
    async (taskId, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await tasksAPI.deleteTask(taskId, token);
        } catch (error) {
            const message = error.response?.data?.message || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

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
            .addCase(createTask.fulfilled, (state) => {
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(createTask.rejected, (state, action) => {
                state.isLoading = false;
                state.errorMessage = action.payload
            })
            .addCase(getTasks.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getTasks.fulfilled, (state, action) => {
                state.tasks = action.payload;
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(getTasks.rejected, (state, action) => {
                state.isLoading = false;
                state.errorMessage = action.payload
            })
            .addCase(getTask.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getTask.fulfilled, (state, action) => {
                state.task = action.payload;
                state.isLoading = false;
            })
            .addCase(getTask.rejected, (state, action) => {
                state.isLoading = false;
                state.errorMessage = action.payload
            })
            .addCase(closeTask.pending, (state) => {
                state.isLoading = true
            })
            .addCase(closeTask.fulfilled, (state) => {
                state.isLoading = false;
                state.task.status = "done";
            })
            .addCase(closeTask.rejected, (state, action) => {
                state.isLoading = false;
                state.errorMessage = action.payload
            })
            .addCase(deleteTask.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteTask.fulfilled, (state) => {
                state.isLoading = false;
                state.task = {};
            })
            .addCase(deleteTask.rejected, (state, action) => {
                state.isLoading = false;
                state.errorMessage = action.payload
            })
    }
});

export const { reset } = tasksSlice.actions;
export default tasksSlice.reducer;
