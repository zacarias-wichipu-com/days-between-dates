import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers'

function AppKeyboardDatePicker (props) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        id={'fromDatePicker'}
        format={'dd/MM/yyyy'}
        label={'Date from'}
        KeyboardButtonProps={{
          'aria-label': 'change date'
        }}
        PopoverProps={{
          anchorOrigin: { horizontal: 'center', vertical: 'bottom' },
          transformOrigin: { horizontal: 'center', vertical: 'bottom' }
        }}/>
    </MuiPickersUtilsProvider>
  )
}
