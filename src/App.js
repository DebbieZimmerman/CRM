
import React, {useEffect} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import './App.css';
import NavBar from './Components/NavBar'
import Container from './Components/Container'

const App = inject("generalStore")(observer((props) => {

  useEffect(() => {
    props.generalStore.getInitialData()
  }
    , [])

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Container />
      </div>
    </Router>
  )
}))

export default App
