import React from "react"
import Greet from "./Greet/Greet"
import { ardaNames } from '../services/ardaNames'

const App = () => {
  return (
    <Greet name={ardaNames[Math.floor(Math.random() * ardaNames.length)].name} />
  )
}

export default App