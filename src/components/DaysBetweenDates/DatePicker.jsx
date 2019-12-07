import React from 'react'
import PropTypes from 'prop-types'
import DateFnsUtils from '@date-io/date-fns'
import { format, parse } from 'date-fns'
import { Box } from '@material-ui/core'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'

function DatePicker (props) {
  const {
    date,
    dateFormat,
    label,
    stateProp,
    onDateChange
  } = props

  const style = {
    width: '100%'
  }

  const handleDateChange = date => {
    onDateChange(stateProp, format(date, dateFormat))
  }

  return (
    <Box mt={4}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          value={parse(date, dateFormat, new Date())}
          format={dateFormat}
          label={label}
          style={style}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date'
          }}/>
      </MuiPickersUtilsProvider>
    </Box>
  )
}

DatePicker.propTypes = {
  dateFormat: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  stateProp: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onDateChange: PropTypes.func.isRequired
}

export default DatePicker
