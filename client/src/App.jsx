import { RouterProvider } from 'react-router-dom';
import { router } from 'routes/Routes';
import { useEffect } from "react";
import { tickerApi } from "api";
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const { interval } = useSelector(state => state.app);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(tickerApi.endpoints.getQuotes.initiate(interval))
  }, [interval]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
