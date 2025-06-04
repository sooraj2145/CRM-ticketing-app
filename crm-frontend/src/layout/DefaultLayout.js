import React from 'react'
import Header from './partials/Header.comp'
import Footer from './partials/Footer.comp'

const DefaultLayout = ({children}) => {
  return (
    <div className='default-layout'>
        <div className='header'>
      <Header />
    </div>
    <main className='main-content'>
        {children}
    </main>
    <footer className='footer'>
      <Footer />
    </footer>
    </div>
  )
}

export default DefaultLayout
