import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


export default function Client(props) { 
 let client = props.client
 console.log(client.first)

  return (

      <div className="client-container">
        Client info {client.first}
      </div>

  )
}