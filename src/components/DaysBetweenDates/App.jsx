import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { differenceInDays, format, parse } from 'date-fns'
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

const dateFormat = 'dd/MM/yyyy'
const currentDate = format(new Date(), dateFormat)

const calculateDatesDifferenceInDays = (toDate, fromDate, dateFormat = 'dd/MM/yyyy') => {
  return differenceInDays(
    parse(toDate, dateFormat, new Date()),
    parse(fromDate, dateFormat, new Date())
  )
}

function App ({ classes }) {
  const [fromDate, setFromDate] = useState(currentDate)
  const [toDate, setToDate] = useState(currentDate)
  const [datesDifferenceInDays, setDatesDifferenceInDays] = useState(0)

  const refFromDate = useRef(fromDate)
  const refToDate = useRef(fromDate)

  const handleDateChange = (stateProp, date) => {
    const newState = {
      fromDate: refFromDate.current,
      toDate: refToDate.current
    }

    newState[stateProp] = date

    const daysBetweenDate = calculateDatesDifferenceInDays(newState.toDate, newState.fromDate)

    if (daysBetweenDate < 0) {
      refFromDate.current = date
      refToDate.current = date
    } else {
      switch (stateProp) {
        case 'fromDate':
          refFromDate.current = date
          break
        case 'toDate':
          refToDate.current = date
          break
        default:
      }
    }

    setFromDate(refFromDate.current)
    setToDate(refToDate.current)
    setDatesDifferenceInDays(calculateDatesDifferenceInDays(refToDate.current, refFromDate.current))
  }

  return (
    <Container
      maxWidth={'xs'}
      className={classes.daysBetweenDatesContainerMaxWidthXs}>
      <Header
        dateFormat={dateFormat}
        fromDate={fromDate}
        toDate={toDate}
        datesDifferenceInDays={datesDifferenceInDays}/>
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
  classes: PropTypes.object.isRequired
}

export default Theme(withStyles(styles)(App))
