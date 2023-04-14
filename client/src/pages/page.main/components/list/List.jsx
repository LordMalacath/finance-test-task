import _ from 'lodash'
import { useSelector } from 'react-redux'
import ListItem from './ListItem.jsx/ListItem';



export default function List() {
  const { data, filteredData } = useSelector(state => state.tickerData);

  return (
    <div className="tickersList">
      {_.keys(data).length > 0 &&
        _.map(data, function (element) {
          const item = _.last(element)
          if (filteredData.length) {
            if (_.includes(filteredData, item.ticker)) {
              return <ListItem item={item} key={item.ticker} />
            } else { return }
          }
          return <ListItem item={item} key={item.ticker} />
        })
      }
    </div>
  )
}