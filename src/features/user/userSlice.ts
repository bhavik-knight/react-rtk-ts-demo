import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
    id: number;
    name: string;
}

interface InitialState {
    isLoading: boolean;
    data: Array<User>;
    error: string;
}

const initialUserState: InitialState = {
    isLoading: false,
    data: [],
    error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
});

const userSlice = createSlice({
    name: "user",

    initialState: initialUserState,

    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state: InitialState) => {
            state.isLoading = true;
        });

        builder.addCase(fetchUsers.fulfilled, (state: InitialState, action: PayloadAction<Array<User>>) => {
            state.isLoading = false;
            state.data = action.payload;
            state.error = "";
        });

        builder.addCase(fetchUsers.rejected, (state: InitialState, action) => {
            state.isLoading = false;
            state.error = action.error.message || "Something went wrong in fetching users' data.";
            state.data = [];
        });
    },
});

export default userSlice.reducer;
