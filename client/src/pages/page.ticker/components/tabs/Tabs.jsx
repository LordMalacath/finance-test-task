import { useState } from "react";
import Chart from "../chart/Chart";


const tabs = [
  { tabName: 'Price', tickerKey: 'price' },
  { tabName: 'Change', tickerKey: 'change' },
  { tabName: 'Change %', tickerKey: 'change_percent' },
  { tabName: 'Dividend', tickerKey: 'dividend' },
  { tabName: 'Yield', tickerKey: 'yield' }
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('Price');
  const handleChange = (tab) => {
    setActiveTab(tab);
  };


  return (
    <div className='tabs'>
      <div className="tabs__list">
        {
          tabs.map(({ tabName }) =>
            <div
              className={activeTab === tabName ? "tab tab--active" : "tab"}
              key={tabName}
              onClick={() => handleChange(tabName)}>
              <div className="tab__name">{tabName}</div>
            </div>)
        }
      </div>
      <div className="tabs__chart">
        {
          tabs.map(({ tickerKey, tabName }) =>
            activeTab === `${tabName}` &&
            <Chart yAxis={tickerKey} key={tabName} />
          )
        }
      </div>
    </div>
  )
}
