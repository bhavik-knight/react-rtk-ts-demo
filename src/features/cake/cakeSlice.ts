import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    numberOfCake: number;
    canOrder: boolean;
}

const initialCakeState: InitialState = {
    numberOfCake: 10,
    canOrder: true,
};

const cakeSlice = createSlice({
    name: "cake",

    initialState: initialCakeState,

    reducers: {
        ordered: (state: InitialState, action: PayloadAction<number>) => {
            if (action.payload && state.numberOfCake >= action.payload) {
                state.numberOfCake -= action.payload;
            } else if (state.numberOfCake > 0) {
                state.numberOfCake--;
            }

            if (state.numberOfCake <= 0) {
                state.canOrder = false;
            }
        },

        restocked: (state: InitialState, action: PayloadAction<number>) => {
            if (action.payload) {
                state.numberOfCake += action.payload;
            } else {
                state.numberOfCake++;
            }

            if (!state.canOrder && state.numberOfCake > 0) {
                state.canOrder = true;
            }
        },
    },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
