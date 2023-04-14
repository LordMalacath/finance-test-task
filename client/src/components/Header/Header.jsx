import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PinnedTicker from "./components/PinnedTicker/PinnedTicker";
import "./Header.scss";
import logo from "img/chart-646.svg"
import { tickerApi } from "api";
import { fetchInterval } from "redux/slices/tickerSlice";
import { useEffect } from "react";
import _ from "lodash";


export default function Header() {
  const { pinnedTickers, interval } = useSelector(state => state.app);
  const dispatch = useDispatch()
  const handleChange = (e) => {
    dispatch(fetchInterval(e.target.value));
  };

  const intervals = [1000, 5000, 60000, 300000];

  const intervalFromMilliseconds = (value) => {
    if (value < 60000) { return value / 1000 + "s" }
    if (60000 <= value && value < 3600000) { return value / 60000 + "min" }
  }

  useEffect(() => {
    dispatch(tickerApi.endpoints.getQuotes.initiate(interval))
  }, [interval]);


  return (
    <div className="header">
      <Link to={'/'} className="header__logo">
        <img src={logo} alt="logo" />
        <span>
          Tickers
        </span>
      </Link>
      <div className="header__nav">
        <div className="pinnedTickers">
          {
            pinnedTickers.length > 0 &&
            pinnedTickers.map(item => <PinnedTicker ticker={item} key={item} />)
          }
        </div>
      </div>
      <div className="header__select">
        <span>Update interval</span>
        <select value={interval} onChange={(e) => handleChange(e)}>
          {
            intervals.map((item) => (
              <option key={item} value={item}>{intervalFromMilliseconds(item)}</option>
            ))
          }
        </select>
      </div>
    </div>
  )
}
