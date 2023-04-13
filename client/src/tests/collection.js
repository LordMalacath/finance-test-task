import _ from 'lodash';


const incomingData = [
  {
    ticker: "AAPL",
    exchange: "NASDAQ",
    price: "259.07",
    change: "158.64",
    change_percent: "0.07",
    dividend: "0.64",
    yield: "0.23",
    last_trade_time: "2023-04-11T10:39:12.000Z"
  },
  {
    ticker: "APPL",
    exchange: "NASDAQ",
    price: "259.07",
    change: "158.64",
    change_percent: "0.07",
    dividend: "0.64",
    yield: "0.23",
    last_trade_time: "2023-04-11T10:39:12.000Z"
  },
]

const state = {
  data: {
    AAPL: {
      exchange: "NASDAQ",
      price: "259.07",
      change: "158.64",
      change_percent: "0.07",
      dividend: "0.64",
      yield: "0.23",
      last_trade_time: "2023-04-11T10:39:12.000Z",
    },
    PPL: {
      exchange: "NASDAQ",
      price: "259.07",
      change: "158.64",
      change_percent: "0.07",
      dividend: "0.64",
      yield: "0.23",
      last_trade_time: "2023-04-11T10:39:12.000Z",
    },
  }
}




export const myFn = () => {

  _.forEach(incomingData, function (payload) {
    let ticker = state.data[payload.ticker];

    if (Boolean(ticker)) {

        _.take(_.concat(ticker, payload), 5);

      console.log(ticker)

    } else {
      state.data[payload.ticker] = [payload]
      console.log("created")
    }
  })
  console.log(state)
}

