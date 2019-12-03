import React, { Component } from 'react'
import { Box, Container, Typography } from '@material-ui/core'
import 'typeface-roboto'
import './../app.scss'

export default class DaysBetweenDatesApp extends Component {
  render () {
    return (
      <Container maxWidth={'xs'}>
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
                14502</Typography>
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
      </Container>
    )
  }
}
