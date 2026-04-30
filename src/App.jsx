import { useState } from 'react'
import './App.css'
import Grid from './components/Grid'
import {DataView} from './components/DataView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Grid/> */}
    <DataView/>
    </>
  )
}

export default App
