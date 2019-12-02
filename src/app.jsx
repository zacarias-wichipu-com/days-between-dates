import React, { useState } from 'react'
import { render } from 'react-dom'
import 'typeface-roboto'
import DateFnsUtils from '@date-io/date-fns'
import { Button, Container, Grid, Typography } from '@material-ui/core'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import './app.scss'

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const handleDateChange = date => {
    setSelectedDate(date)
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Container maxWidth={'xs'} spacing={3}>
        <Grid>
          <Grid item xs>
            <header>
              <Typography variant="h1" component="h1" gutterBottom>
                Days Between Date
              </Typography>
            </header>
          </Grid>
          <form>
            <Grid item xs>
              <div>
                <KeyboardDatePicker
                  disableToolbar
                  id={'fromDatePicker'}
                  format={'dd/MM/yyyy'}
                  label={'Date from'}
                  KeyboardButtonProps={{
                    'aria-label': 'change date'
                  }}
                  value={selectedDate}
                  onChange={handleDateChange}/>
              </div>
            </Grid>
            <Grid item xs>
              <div>
                <KeyboardDatePicker
                  disableToolbar
                  id={'toDatePicker'}
                  format={'dd/MM/yyyy'}
                  label={'Date to'}
                  KeyboardButtonProps={{
                    'aria-label': 'change date'
                  }}
                  value={selectedDate}
                  onChange={handleDateChange}/>
              </div>
            </Grid>
            <Grid item xs>
              <Button variant="contained" color="primary">
                Calculate
              </Button>
            </Grid>
          </form>
          <div>
            Result
          </div>
        </Grid>
      </Container>
    </MuiPickersUtilsProvider>
  )
}

render(<App/>, document.getElementById('app'))
