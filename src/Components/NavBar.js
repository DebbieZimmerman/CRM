import React, { useState, useEffect } from 'react'
import NavBarLinks from './NavBarLink'
import { Link } from 'react-router-dom'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core'

export default function NavBar() {

  const navItems = [
    {title: "Clients", link: "/clients"},
    {title: "Actions", link: "/actions"},
    {title: "Analytics", link: "/analytics"}
  ]

  return (
    <div className="">
      <AppBar position="static">
        <Toolbar>
            {navItems.map(n => <NavBarLinks title={n.title} link={n.link} key={n.title}></NavBarLinks>)}
        </Toolbar>
      </AppBar>
    </div>
  )
}