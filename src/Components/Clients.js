import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Client from './Client'

export default function Clients() {
 
  return (

      <div className="clients-container">
          Clients
        <Client />
      </div>

  )
}