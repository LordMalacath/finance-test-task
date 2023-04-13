import deleteIcon from "img/minus_icon.png";
import trendingUpIcon from 'img/trendingUp.svg';
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
  // const { price } = useSelector(state => state.tickerData?.data[ticker][0])

  return (
    <>
      <Link to={`${ticker}`}
        className="pinnedTickers__item"
        onClick={tickerClick}
      >
        <img className="trending" src={trendingUpIcon} alt="trending" />
        <span className="name">{ticker}</span>
        {/* <span className="price">{price}$</span> */}
        <div
          className="item__delete"
          onClick={() => {handleClick(ticker) }}
        >
          <img src={deleteIcon} alt='delete' />
        </div>
      </Link>
    </>
  )
}
