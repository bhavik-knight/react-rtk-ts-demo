import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    numberOfCake: number;
}

const initialCakeState: InitialState = {
    numberOfCake: 10,
};

const cakeSlice = createSlice({
    name: "cake",

    initialState: initialCakeState,

    reducers: {
        ordered: (state: InitialState, action: PayloadAction<number>) => {
            if (action.payload) {
                state.numberOfCake -= action.payload;
            } else {
                state.numberOfCake--;
            }
        },

        restocked: (state: InitialState, action: PayloadAction<number>) => {
            if (action.payload) {
                state.numberOfCake += action.payload;
            } else {
                state.numberOfCake++;
            }
        },
    },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
