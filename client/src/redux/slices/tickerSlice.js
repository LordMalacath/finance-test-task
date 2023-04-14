import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import _ from 'lodash';
import { setInterval } from "./appSlice";
import { tickerApi } from "api";




export const fetchInterval = createAsyncThunk(
  'tickerData/fetchInterval',
  (interval, { dispatch }) => {
    dispatch(setInterval(interval));
    dispatch(tickerApi.util.resetApiState())

  }
)


const initialState = {
  data: {},
  filteredData: [],
};

export const tickerDataSlice = createSlice({
  name: 'tickerData',
  initialState,
  reducers: {
    setData: (state, { payload }) => {
      _.forEach(payload, function (item) {
        const ticker = state.data[item.ticker];
        if (Boolean(ticker)) {
          state.data[item.ticker] = _.takeRight(_.concat(ticker, item), 12);
        } else {
          state.data[item.ticker] = [item]
        }
      })
    },
    searchTicker: (state, { payload }) => {
      const tickersList = _.keys(state.data);
      state.filteredData = _.filter(tickersList, function (element) {
        if (_.includes(element, _.toUpper(payload))) {
          return element
        }
        return
      })
    }
  }
});

export const {
  setData,
  searchTicker,
} = tickerDataSlice.actions;

export default tickerDataSlice.reducer;