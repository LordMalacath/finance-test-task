import { useGetQuotesQuery } from 'api';
import { RouterProvider } from 'react-router-dom';
import { router } from 'routes/Routes';


function App() {
  useGetQuotesQuery();
  return (
      <RouterProvider router={router} />
  );
}

export default App;
