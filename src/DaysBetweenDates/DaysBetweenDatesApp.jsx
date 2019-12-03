import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container } from '@material-ui/core'
import 'typeface-roboto'
import DaysBetweenDatesHeader from './DaysBetweenDatesHeader'
import './../app.scss'

export default class DaysBetweenDatesApp extends Component {
  constructor (props) {
    super(props)

    const { currentDate } = props

    this.state = {
      fromDate: currentDate,
      toDate: currentDate
    }
  }

  render () {
    return (
      <Container maxWidth={'xs'}>
        <DaysBetweenDatesHeader
          {...this.props}
          {...this.state}/>
      </Container>
    )
  }
}

DaysBetweenDatesApp.propTypes = {
  dateFormat: PropTypes.string.isRequired,
  currentDate: PropTypes.string.isRequired
}
