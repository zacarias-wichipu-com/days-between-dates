import React, { useState } from 'react'
import { render } from 'react-dom'
import 'typeface-roboto'
import DateFnsUtils from '@date-io/date-fns'
import {
  Backdrop,
  Button,
  Container,
  Fade,
  Grid,
  Modal,
  Typography
} from '@material-ui/core'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import './app.scss'

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [open, setOpen] = React.useState(false)

  const handleDateChange = date => {
    setSelectedDate(date)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
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
              <Button
                variant="contained"
                color="primary"
                onClick={handleOpen}>
                Calculate
              </Button>
            </Grid>
          </form>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500
            }}>
            <Fade in={open}>
              <div>
                <h2 id="transition-modal-title">Transition modal</h2>
                <p id="transition-modal-description">react-transition-group animates me.</p>
              </div>
            </Fade>
          </Modal>
        </Grid>
      </Container>
    </MuiPickersUtilsProvider>
  )
}

render(<App/>, document.getElementById('app'))
