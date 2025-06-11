import React from 'react'
import Header from './partials/Header.comp'
import Footer from './partials/Footer.comp'
import { Outlet } from 'react-router-dom'
const DefaultLayout = () => {
  return (
    <div className='default-layout'>
        <div className='header mb-2'>
      <Header />
    </div>
    <main className='main-content'>
        {<Outlet />}
    </main>
    <footer className='footer'>
      <Footer />
    </footer>
    </div>
  )
}

export default DefaultLayout
