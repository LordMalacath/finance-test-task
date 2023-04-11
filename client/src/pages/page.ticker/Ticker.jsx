import { useSelector } from 'react-redux'
import Tabs from './components/tabs/Tabs'
import './Ticker.scss'

export default function Ticker() {
  const { data } = useSelector(store => store.tickerData);

  // get ticker data by routeName

  return (
    <div className='ticker'>
      <div className='ticker__name'>{data[0].ticker}</div>
      <Tabs tickerdata={data[0]} />
    </div>
  )
}
