import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const initialState = {
    pinnedTickers: [],
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        pinTicker: (state, { payload }) => {
            state.pinnedTickers = _.concat(state.pinnedTickers, payload)
        },
        unPinTicker: (state, { payload }) => {
            state.pinnedTickers = _.pull(state.pinnedTickers, payload);
        }
    }
});

export const {
    pinTicker,
    unPinTicker,
} = appSlice.actions;

export default appSlice.reducer;