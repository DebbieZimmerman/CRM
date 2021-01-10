import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AddClient from './AddClient'
import UpdateClient from './UpdateClient'

export default function Actions() {
 
  return (

      <div className="actions-container">
        Actions
          <UpdateClient />
          <AddClient />
      </div>

  )
}