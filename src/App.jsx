import React from 'react'
import Navbar from './Component/NavbarDiv/Navbar'
import Search from './Component/SearchDiv/Search'
import Job from './Component/JobDiv/Job'
import Value from './Component/ValueDiv/Value'
import Footer from './Component/FooterDiv/Footer'
import Career from './Component/ValueDiv/Career'

const App = () => {
  return (
    <div className='w-[90%] m-auto bg-white'>
      <Navbar/>
      <Search/>
      <Job/>
      <Value/>
      <Career/>
      <Footer/>
    </div>
  )
}

export default App