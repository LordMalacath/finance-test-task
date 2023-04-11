import { useDispatch, useSelector } from 'react-redux'
import addIcon from 'img/add.svg'
import doneIcon from 'img/done.svg'
import trendingUpIcon from 'img/trendingUp.svg'
import trendingDownIcon from 'img/trendingDown.svg'
import { useState } from 'react';

export default function List() {
  const { data } = useSelector(store => store.tickerData);
  const dispatch = useDispatch();
  const pinTicker = (ticker) => {
    console.log(ticker);
    dispatch();
    setState(!state)
  };
  const [state, setState] = useState(false);

  return (
    <div className="tickersList">
      {data.map(({ ticker, exchange, price, change, change_percent, last_trade_time, pin }) => (
        <div className='tickersList__item' key={ticker}>
          <div className="ticker">{ticker}</div>
          <div className="exchange">{exchange}</div>
          <div className="price">{price}$</div>
          <div className="change"><img src={trendingUpIcon} alt='trending' />{change}</div>
          <div className="changePercent">{change_percent}%</div>
          <div className="date">{last_trade_time}</div>
          <button className="pin" onClick={() => { pinTicker(ticker) }}><img src={!pin ? addIcon : doneIcon} alt='pin' /></button>
        </div>
      ))}
    </div>
  )
}
