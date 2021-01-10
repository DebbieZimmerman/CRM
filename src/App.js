
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import './App.css';
import NavBar from './Components/NavBar'
import Container from './Components/Container'



const App = observer(() => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Container />
      </div>
    </Router>
  )})

export default App
