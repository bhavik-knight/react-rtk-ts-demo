import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

interface InitialState {
    numberOfIcecream: number;
}

const initialIcecreamState: InitialState = {
    numberOfIcecream: 20,
};

const iceCreamSlice = createSlice({
    name: "icecream",

    initialState: initialIcecreamState,

    reducers: {
        ordered: (state: InitialState, action: PayloadAction<number>) => {
            if (action.payload) {
                state.numberOfIcecream -= action.payload;
            } else {
                state.numberOfIcecream--;
            }
        },

        restocked: (state: InitialState, action: PayloadAction<number>) => {
            if (action.payload) {
                state.numberOfIcecream += action.payload;
            } else {
                state.numberOfIcecream++;
            }
        },
    },

    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state) => {
            state.numberOfIcecream--;
        });
    },
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
