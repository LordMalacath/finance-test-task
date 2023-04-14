import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const initialState = {
    pinnedTickers: [],
    interval: '',
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
        },
        setInterval: (state, {payload}) => {
            state.interval = payload;
        },
    }
});

export const {
    pinTicker,
    unPinTicker,
    setInterval,
} = appSlice.actions;

export default appSlice.reducer;