import { useState } from "react";
import Chart from "../chart/Chart";



export default function Tabs({ data }) {
  const tabs = ['Price', 'Change', 'Change %', 'Dividend', 'Yield'];
  const [tab, setTab] = useState('Price');
  const handleChange = (tab) => {
    setTab(tab);
  };

  return (
    <div className='tabs'>
      <div className="tabs__list">
        {tabs.map((item, index) =>
          <div
            className={tab === item ? "tab tab--active" : "tab"}
            key={index}
            onClick={() => handleChange(item)}>
            <div className="tab__name">{item}</div>
            <div className="tab__value">{item.value || "100.00 $"}</div>
          </div>)
        }
      </div>
      <div className="tabs__chart">
        <Chart data={''}/>
        {/* {tabs.map((item, index) =>
          <Chart data={item} key={index} />
        )} */}
      </div>
    </div>
  )
}
