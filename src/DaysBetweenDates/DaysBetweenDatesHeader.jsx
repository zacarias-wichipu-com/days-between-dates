import React from 'react'
import PropTypes from 'prop-types'
import { differenceInDays, parse } from 'date-fns'
import { Box, Typography } from '@material-ui/core'

export default function DaysBetweenDatesHeader (props) {
  const {
    dateFormat,
    fromDate,
    toDate
  } = props

  const daysBetweenDate = differenceInDays(
    parse(fromDate, dateFormat, new Date()),
    parse(toDate, dateFormat, new Date())
  )

  return (
    <Box component={'header'}>
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
          <span> </span>days
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

DaysBetweenDatesHeader.propTypes = {
  dateFormat: PropTypes.string.isRequired,
  fromDate: PropTypes.string.isRequired,
  toDate: PropTypes.string.isRequired
}
