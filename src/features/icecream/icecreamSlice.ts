import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

interface InitialState {
    numberOfIcecream: number;
    canOrderIcecream: boolean;
}

const initialIcecreamState: InitialState = {
    numberOfIcecream: 20,
    canOrderIcecream: true,
};

const iceCreamSlice = createSlice({
    name: "icecream",

    initialState: initialIcecreamState,

    reducers: {
        ordered: (state: InitialState, action: PayloadAction<number>) => {
            if (action.payload && state.numberOfIcecream >= action.payload) {
                state.numberOfIcecream -= action.payload;
            }

            if (!action.payload && state.numberOfIcecream > 0) {
                state.numberOfIcecream--;
            }

            if (state.numberOfIcecream <= 0) {
                state.canOrderIcecream = false;
            }
        },

        restocked: (state: InitialState, action: PayloadAction<number>) => {
            if (action.payload) {
                state.numberOfIcecream += action.payload;
            } else {
                state.numberOfIcecream++;
            }

            if (!state.canOrderIcecream && state.numberOfIcecream > 0) {
                state.canOrderIcecream = true;
            }
        },
    },

    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state) => {
            if (state.canOrderIcecream && state.numberOfIcecream > 0) {
                state.numberOfIcecream--;
            }
        });
    },
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
