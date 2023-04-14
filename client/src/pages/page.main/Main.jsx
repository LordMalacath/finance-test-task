import List from "./components/list/List";
import Search from "./components/search/Search";
import './Main.scss'


export default function Main() {


  return (
    <div className='mainPage'>
      <div className="mainPage__search">
        <Search />
      </div>
      <div className="mainPage__tickersList">
        <List />
      </div>
    </div>
  )
}
