import Header from 'components/Header/Header'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <Header />
      <div className='app'>
        <Outlet />
      </div>
    </>
  )
}
