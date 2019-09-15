import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import logo from '../../assets/images/logo_loona.png'
import Button from '@material-ui/core/Button'

export default function ButtonAppBar() {
  return (
    <div>
      <AppBar style={styleTransparent}>
        <Toolbar>
          <img src={logo} alt="logo" style={styleLogo} />
          <div style={styleButtonCenter}>
            <Button style={fontStyle}>Characters</Button>
            <Button style={fontStyle}>Choices</Button>
          </div>
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
  maxWidth: "12%"
}

const styleButtonCenter = {
  margin: "0 auto",
}

const fontStyle = {
  fontFamily: "Poppins",
  fontSize: "1.25em",
  color: "#f7f7f7"
}
