import { format } from 'date-fns';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';



export default function Chart({ yAxis }) {
  const { data } = useSelector(store => store.tickerData);
  const location = useLocation();
  const ticker = _.has(data, location.pathname.slice(1)) ? data[location.pathname.slice(1)] : '';
  const formatDate = (date) => {
    return format(new Date(date), 'K:mm:ssaaa');
  }


  return (
    <>
      {data &&
        <ResponsiveContainer width="100%" height="100%" >
          <LineChart
            width={500}
            height={300}
            data={ticker}
            margin={{
              top: 20,
              right: 40,
              left: 0,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="4 4" />
            <XAxis dataKey="last_trade_time" tickFormatter={(tick)=>formatDate(tick)} />
            <YAxis />
            <Tooltip />
            <Line type="linear" dataKey={yAxis} stroke="#000" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      }
    </>
  )
}
