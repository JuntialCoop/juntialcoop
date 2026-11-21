import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import MobileTabBar from '../MobileTabBar/MobileTabBar'

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
      <MobileTabBar />
    </>
  )
}
