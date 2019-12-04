import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, withStyles } from '@material-ui/core'
import 'typeface-roboto'
import Header from './Header'
import DatePicker from './DatePicker'
import './../app.scss'

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

    this.handleDateChange = this.handleDateChange.bind(this)
  }

  handleDateChange (stateProp, date) {
    console.log(stateProp, date)
    this.setState({
      [stateProp]: date
    })
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
      </Container>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  dateFormat: PropTypes.string.isRequired,
  currentDate: PropTypes.string.isRequired
}

export default withStyles(styles)(App)
