import './App.css'
import {useState,useEffect} from 'react'
import {AppContainer} from './App.styled'
import { Route, Routes, Navigate } from 'react-router-dom'
import Menu from '../../components/Menu/Menu'
import AuthPage from '../Auth/AuthPage'
import Home from '../Homepage/Homepage'
import AllVendors from '../AllVendors/AllVendors'
import VendorDetail from '../VendorDetail/VendorDetail'
import Cart from '../Cart/Cart'
import AddPackage from '../AddPackage/AddPackage'
import ViewPackage from '../ViewPackage/ViewPackage'
import Checkout from '../Checkout/Checkout'



const App = () => {

//USER STATE 
const [user,setUser] = useState(null)

//SET USER WITH LOGIN OR SIGNUP
const authUser = (val)=>{
  setUser({user:val})
}


//LOGOUT 
const logout = (val)=>{
  setUser({user:null})
  localStorage.removeItem('token')
}


//GET LOCALDATA AND SET USER 
const updateUserState =()=>{
  let token = localStorage.getItem('token')
  if(token){
    const payload = JSON.parse(window.atob(token.split('.')[1]))
    if(payload.exp < Date.now() /1000){
      localStorage.removeItem('token')
      token = null
    }else{
      let userData = payload.user
      setUser({user:userData})
  }
}else{
  return
}
}


// USE EFFECT TO FETCH FROM LOCAL STATE
useEffect(()=>{
updateUserState()
},[])



  return (
    <AppContainer>
      <Menu user={user} logout={logout}/>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/vendors' element={<AllVendors />} />
      <Route path='/vendor/:id' element={<VendorDetail />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/package/add' element={<AddPackage />} />
      <Route path='/package/:id' element={<ViewPackage />} />
      <Route path='/checkout' element={<Checkout />} />




      <Route path='/auth' element={<AuthPage user={user} authUser={authUser} /> }/>
      <Route path="*" element={<Navigate to="/" replace />} />
      
      </Routes>
    </AppContainer>
  )
}

export default App