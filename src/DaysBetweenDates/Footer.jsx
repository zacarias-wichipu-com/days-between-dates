import React from 'react'
import { Box, CardMedia, Link, withStyles } from '@material-ui/core'

const StyledCardMedia = withStyles({
  root: {
    maxWidth: 160
  }
})(CardMedia)

export default function Footer (props) {
  return (
    <Box
      alignItems={'flex-end'}
      component={'footer'}
      display={'flex'}
      justifyContent={'center'}
      mt={6}>
      <Link
        href={'mailto:hablacon@wichipu.com'}>
        <StyledCardMedia
          component={'img'}
          src={'./assets/images/wichipu.svg'}/>
      </Link>
    </Box>
  )
}
