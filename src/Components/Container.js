import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Actions from './Actions'
import Analytics from './Analytics'
import Clients from './Clients'

export default function Container() {
 
  return (

      <div className="container">
        <Route path="/clients" exact render={() => <Clients />} />
        <Route path="/actions" exact render={() => <Actions />} />
        <Route path="/analytics" exact render={() => <Analytics />} />
      </div>

  )
}