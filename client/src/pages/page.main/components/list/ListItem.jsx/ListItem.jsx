import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { pinTicker, unPinTicker } from 'redux/slices/appSlice';
import { format } from 'date-fns';
import addIcon from 'img/add.svg'
import doneIcon from 'img/done.svg'
import trendingUpIcon from 'img/trendingUp.svg'



export default function ListItem({ item }) {
  const dispatch = useDispatch();
  const { pinnedTickers } = useSelector(state => state.app);
  const handlePin = (ticker) => { dispatch(pinTicker(ticker)) };
  const handleUnpin = (ticker) => { dispatch(unPinTicker(ticker)) };
  const formatDate = (date) => {
    return format(new Date(date), 'K:mm:ss aaa, y/MM/dd')
  };

  return (
    <div className='tickersList__item'>
      <div className="ticker">{item.ticker}</div>
      <div className="exchange">{item.exchange}</div>
      <div className="price">{item.price}$</div>
      <div className="change"><img src={trendingUpIcon} alt='trending' />{item.change}</div>
      <div className="changePercent">{item.change_percent}%</div>
      <div className="date">{formatDate(item.last_trade_time)}</div>
      {
        _.includes(pinnedTickers, item.ticker) ?
          <button className="pin" onClick={() => { handleUnpin(item.ticker) }}>
            <img src={doneIcon} alt='unPin' />
          </button> :
          <button className="pin" onClick={() => { handlePin(item.ticker) }}>
            <img src={addIcon} alt='pin' />
          </button>
      }
    </div>
  )
}
