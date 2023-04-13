import { useDispatch } from "react-redux";
import List from "./components/list/List";
import './Main.scss'
import { useForm } from "react-hook-form";
import { searchTicker } from "redux/slices/tickerSlice";


export default function Main() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => dispatch(searchTicker(data.search));

  return (
    <div className='mainPage'>
      <div className="mainPage__search">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="search" placeholder="Search for tickers..." {...register("search", {})} />

          <button type="submit" >Search</button>
        </form>
      </div>
      <div className="mainPage__tickersList">
        <List tickers={[]} />
      </div>
    </div>
  )
}
