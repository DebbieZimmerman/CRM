import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from '@material-ui/core'

export default function NavBarLinks(props) {
  return (
    <span className="nav-bar-link">
      <Link to={props.link } style={{ textDecoration: 'none' }}><Button>{ props.title}</Button></Link>
    </span>
  )
}