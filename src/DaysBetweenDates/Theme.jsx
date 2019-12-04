import React from 'react'
import { createMuiTheme, CssBaseline, MuiThemeProvider } from '@material-ui/core'

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          background: 'radial-gradient(ellipse at center, #f4f4f4 0%,#d6d6d6 100%)'
        }
      }
    }
  }
})

function Theme (Component) {
  function appTheme (props) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <Component {...props} />
      </MuiThemeProvider>
    )
  }

  return appTheme
}

export default Theme
