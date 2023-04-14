import trendingUpIcon from 'img/trendingUp.svg';
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { unPinTicker } from "redux/slices/appSlice";



export default function PinnedTicker({ ticker }) {
  const dispatch = useDispatch();
  const tickerClick = () => { };
  const handleClick = (ticker) => {
    console.log(ticker)
    dispatch(unPinTicker(ticker))
  };
  const tickerData = useSelector(state => state.tickerData?.data[ticker])


  return (
    <>
      <Link to={`${ticker}`}
        className="pinnedTickers__item"
        onClick={tickerClick}
      >
        <img className="trending" src={trendingUpIcon} alt="trending" />
        <span className="name">{ticker}</span>
        <span className="price">{_.last(tickerData)?.price}$</span>
      </Link>
    </>
  )
}
