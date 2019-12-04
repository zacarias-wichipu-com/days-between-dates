import React from 'react'
import PropTypes from 'prop-types'
import { differenceInDays, parse } from 'date-fns'
import { Box, Typography } from '@material-ui/core'

export default function Header (props) {
  const {
    dateFormat,
    fromDate,
    toDate
  } = props

  const daysBetweenDate = differenceInDays(
    parse(toDate, dateFormat, new Date()),
    parse(fromDate, dateFormat, new Date())
  )

  return (
    <Box
      component={'header'}
      mt={3}
      mb={6}>
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
            {daysBetweenDate}</Typography>
          <span> </span>day{daysBetweenDate !== 1 && 's'}
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
  dateFormat: PropTypes.string.isRequired,
  fromDate: PropTypes.string.isRequired,
  toDate: PropTypes.string.isRequired
}
