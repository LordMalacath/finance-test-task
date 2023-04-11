import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [{
    ticker: 'AAPL',
    exchange: 'NASDAQ',
    price: "100.00",
    change: 200,
    change_percent: 25,
    dividend: 10,
    yield: 6,
    last_trade_time: "25.01.2023",
    pin: true,
  }]
};

export const tickerDataSlice = createSlice({
  name: 'tickerData',
  initialState,
  reducers: {
    setData: (state, { payload }) => {
      state.data = payload;
    },
    pinTicker: (state, { payload }) => {
      //add lodash func to find ticker by name _.find(state.data, {payload}) = !state.data.pin;
    }
  }
});

export const {
  setData,
  pinTicker,
} = tickerDataSlice.actions;

export default tickerDataSlice.reducer;