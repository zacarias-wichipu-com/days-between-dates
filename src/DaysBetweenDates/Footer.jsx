import React from 'react'
import { Box, CardMedia } from '@material-ui/core'

export default function Footer (props) {
  return (
    <Box
      component={'footer'}>
      <CardMedia
        image={'./wichipu.svg'}/>
    </Box>
  )
}
