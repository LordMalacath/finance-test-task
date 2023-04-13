import { createSlice } from "@reduxjs/toolkit";
import _ from 'lodash';




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
      state.filteredData = _.filter(state.data, function (element) {
        const newestTicker = _.last(element);
        if (_.includes(newestTicker.ticker, _.toUpper(payload))) {
          return newestTicker
        }
        return
      })
      console.log(state.filteredData)
    }
  }
});

export const {
  setData,
  searchTicker,
} = tickerDataSlice.actions;

export default tickerDataSlice.reducer;