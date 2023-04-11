import logo from "img/chart-646.svg"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PinnedTicker from "./components/PinnedTicker/PinnedTicker";
import "./Header.scss";

export default function Header() {
  const { data } = useSelector(store => store.tickerData);

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
          {/* track pinned tickers: add querry auto pin/unpin set */}
          {data.map(item => !item.pin ? <PinnedTicker data={item} key={item.ticker} /> : <></>)}
        </div>
      </div>
      <div className="header__user"></div>
    </div>
  )
}
