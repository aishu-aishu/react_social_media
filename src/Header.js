import React, { useContext } from 'react'
import {FaMobileAlt, FaLaptop,FaTabletAlt} from 'react-icons/fa'
import DataContext from './context/DataContext'

// const Header = ({title,width}) => {
const Header = ({title}) => {
  // Instead of getting width from app.js, we get it using contextApi so that we no need to pass props to all children
  const {width} = useContext(DataContext)
  return (
    <header className='Header'>
      <h1>{title}</h1>
      {width <768 ? <FaMobileAlt />
      : width < 992 ? <FaTabletAlt />
      : <FaLaptop />}
    </header>
  )
}

export default Header