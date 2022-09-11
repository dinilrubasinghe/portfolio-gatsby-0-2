import React from 'react'
import { Global } from '@emotion/react'

export default props => (
  <Global
    styles={theme => ({
      body: {
        color: theme.colors.text,
        background: 'linear-gradient(#222,#555)'
      }
    })}
  />
)
