import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import logo from '../../assets/images/logo_loona.png'
import Button from '@material-ui/core/Button'

import routes from '../../routes'
import NonStyleLink from '../NonStyleLink/NonStyleLink'

export default function Navigation() {
  return (
    <div>
      <AppBar style={styleTransparent}>
        <Toolbar>
          <NonStyleLink to={routes.home}>
            <img src={logo} alt="logo" style={styleLogo} />
          </NonStyleLink>
          <NonStyleLink to={routes.characters}>
            <Button style={fontStyle}>Characters</Button>
          </NonStyleLink>
          <NonStyleLink to={routes.story}>
            <Button style={fontStyle}>Choices</Button>
          </NonStyleLink>
          <NonStyleLink to={routes.about}>
            <Button style={fontStyle}>About</Button>
          </NonStyleLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const styleTransparent = {
  background: "transparent",
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
};

const styleLogo = {
  maxWidth: "15%"
}

const fontStyle = {
  fontFamily: "Poppins",
  fontSize: "1.25em",
  color: "#f7f7f7"
}
