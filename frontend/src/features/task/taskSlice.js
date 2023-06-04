import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import taskAPI from "./taskAPI";

const initialState = {
    task: {},
    tasks: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: ""
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.errorMessage = ""
        }

    },
    extraReducers: builder => {

    }
});

export const { reset } = taskSlice.actions;
export default taskSlice.reducer;