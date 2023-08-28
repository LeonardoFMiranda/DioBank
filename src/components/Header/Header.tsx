import './Header.css'
import dioLogo from '../../assets/images/logo.svg'
import { useContext } from 'react'
import { AppContext } from '../../components/AppContext/AppContext'
export const Header  = () => {

  const context = useContext(AppContext)
  console.log(context)

  return(
    <div className='header'>
      <img src={dioLogo} alt="bank logo" />
      <h1>Banks</h1>
    </div>
  )
}
