import React, { Component } from 'react'
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

class App extends Component {
  constructor (props) {
    super(props)

    const { currentDate } = props

    this.state = {
      fromDate: currentDate,
      toDate: currentDate
    }
  }

  handleDateChange = (stateProp, date) => {
    let newState = {
      fromDate: this.state.fromDate,
      toDate: this.state.toDate
    }

    newState[stateProp] = date

    const daysBetweenDate = differenceInDays(
      parse(newState.toDate, this.props.dateFormat, new Date()),
      parse(newState.fromDate, this.props.dateFormat, new Date())
    )

    if (daysBetweenDate < 0) {
      newState = {
        fromDate: date,
        toDate: date
      }
    } else {
      newState = {
        [stateProp]: date
      }
    }

    this.setState(newState)
  }

  render () {
    const { classes } = this.props

    return (
      <Container
        maxWidth={'xs'}
        className={classes.daysBetweenDatesContainerMaxWidthXs}>
        <Header
          {...this.props}
          {...this.state}/>
        <DatePicker
          dateFormat={this.props.dateFormat}
          id={'fromDatePicker'}
          date={this.state.fromDate}
          stateProp={'fromDate'}
          label={'Date from'}
          onDateChange={this.handleDateChange}/>
        <DatePicker
          dateFormat={this.props.dateFormat}
          id={'toDatePicker'}
          date={this.state.toDate}
          stateProp={'toDate'}
          label={'Date to'}
          onDateChange={this.handleDateChange}/>
        <Footer/>
      </Container>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  dateFormat: PropTypes.string.isRequired,
  currentDate: PropTypes.string.isRequired
}

export default Theme(withStyles(styles)(App))
