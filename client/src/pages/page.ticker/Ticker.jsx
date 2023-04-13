import { useSelector } from 'react-redux'
import Tabs from './components/tabs/Tabs'
import './Ticker.scss'
import { useLocation } from 'react-router-dom';
import _ from 'lodash';

export default function Ticker() {
  const { data } = useSelector(store => store.tickerData);
  const location = useLocation();
  const ticker = _.has(data, location.pathname.slice(1)) ? data[location.pathname.slice(1)][0] : '';

  return (
    <div className='ticker'>
      <div className='ticker__name'>{ticker.ticker}</div>
      <Tabs/>
    </div>
  )
}
