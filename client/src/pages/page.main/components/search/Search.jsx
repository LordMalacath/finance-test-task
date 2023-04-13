import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { searchTicker } from 'redux/slices/tickerSlice';


export default function Search() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => dispatch(searchTicker(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="search" placeholder="Search for tickers..." {...register("search", {})} />

      <button type="submit" >Search</button>
    </form>
  )
}
