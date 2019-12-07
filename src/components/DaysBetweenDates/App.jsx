import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { differenceInDays, parse } from 'date-fns'
import { Container, withStyles } from '@material-ui/core'
import 'typeface-roboto'
import Theme from './Theme'
import Header from './Header'
import DatePicker from './DatePicker'
import Footer from './Footer'
import './../../assets/css/app.scss'

const styles = theme => ({
  daysBetweenDatesContainerMaxWidthXs: {
    maxWidth: 320
  }
})

function App ({ currentDate, dateFormat, classes }) {
  const [fromDate, setFromDate] = useState(currentDate)
  const [toDate, setToDate] = useState(currentDate)

  const handleDateChange = (stateProp, date) => {
    const newState = {
      fromDate: fromDate,
      toDate: toDate
    }

    newState[stateProp] = date

    const daysBetweenDate = differenceInDays(
      parse(newState.toDate, dateFormat, new Date()),
      parse(newState.fromDate, dateFormat, new Date())
    )

    if (daysBetweenDate < 0) {
      setFromDate(date)
      setToDate(date)
    } else {
      switch (stateProp) {
        case 'fromDate':
          setFromDate(date)
          break
        case 'toDate':
          setToDate(date)
          break
        default:
      }
    }
  }

  return (
    <Container
      maxWidth={'xs'}
      className={classes.daysBetweenDatesContainerMaxWidthXs}>
      <Header
        dateFormat={dateFormat}
        fromDate={fromDate}
        toDate={toDate}/>
      <DatePicker
        dateFormat={dateFormat}
        id={'fromDatePicker'}
        date={fromDate}
        stateProp={'fromDate'}
        label={'Date from'}
        onDateChange={handleDateChange}/>
      <DatePicker
        dateFormat={dateFormat}
        id={'toDatePicker'}
        date={toDate}
        stateProp={'toDate'}
        label={'Date to'}
        onDateChange={handleDateChange}/>
      <Footer/>
    </Container>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  dateFormat: PropTypes.string.isRequired,
  currentDate: PropTypes.string.isRequired
}

export default Theme(withStyles(styles)(App))
