import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@material-ui/core'

function Header (props) {
  const {
    datesDifferenceInDays
  } = props

  return (
    <Box
      component={'header'}
      mt={3}
      mb={3}>
      <Box
        component={'h1'}
        color={'text.secondary'}>
        <Typography
          component={'span'}
          variant={'h5'}
          display={'block'}
          align={'left'}>
          <Typography
            component={'strong'}
            variant={'h2'}
            className={'calculate-days-between-dates'}>
            {datesDifferenceInDays}</Typography>
          <span> </span>day{datesDifferenceInDays !== 1 && 's'}
        </Typography>
        <Typography
          component={'span'}
          variant={'h2'}
          display={'block'}
          align={'right'}>between</Typography>
        <Typography
          component={'span'}
          variant={'h2'}
          display={'block'}
          align={'left'}>dates.</Typography>
      </Box>
    </Box>
  )
}

Header.propTypes = {
  datesDifferenceInDays: PropTypes.number.isRequired
}

export default Header
