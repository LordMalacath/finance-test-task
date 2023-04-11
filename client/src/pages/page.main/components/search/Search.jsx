import { useForm } from 'react-hook-form';

export default function Search() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="search" placeholder="Search" {...register("search", {})} />

      <button type="submit" >Search</button>
    </form>
  )
}
