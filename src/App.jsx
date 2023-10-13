import { useState } from 'react'
import MainPage from './components/MainPage'
import './App.css'

function App({cars}) {
  return (
  <MainPage cars={cars}/>
 )
}

export default App
