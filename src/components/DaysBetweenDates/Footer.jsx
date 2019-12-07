import React from 'react'
import { Box, CardMedia, Link, withStyles } from '@material-ui/core'
import image from '../../assets/images/wichipu.svg'

const StyledCardMedia = withStyles({
  root: {
    maxWidth: 160
  }
})(CardMedia)

function Footer () {
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
          src={image}/>
      </Link>
    </Box>
  )
}

export default Footer
