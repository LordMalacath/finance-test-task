import deleteIcon from "img/minus_icon.png";
import trendingUpIcon from 'img/trendingUp.svg'
import trendingDownIcon from 'img/trendingDown.svg'
import { useDispatch } from "react-redux";
import { pinTicker } from "redux/slices/tickerData";
import { Link } from "react-router-dom";

export default function PinnedTicker({ data }) {
  const dispatch = useDispatch();
  const tickerClick = () => { };
  const unpinTicker = (ticker) => {
    dispatch(pinTicker(ticker));
  };

  return (
    <Link to={`${data.ticker}`}
      className="pinnedTickers__item"
      onClick={tickerClick}
    >
      <img className="trending" src={trendingUpIcon} alt="trending" />
      <span className="name">{data.ticker}</span>
      <span className="price">{data.price}$</span>
      <div
        className="item__delete"
        onClick={() => unpinTicker(data.ticker)}
      >
        <img src={deleteIcon} alt='delete' />
      </div>
    </Link>
  )
}
