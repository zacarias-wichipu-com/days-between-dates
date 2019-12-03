import React from 'react'
import { render } from 'react-dom'
import { format } from 'date-fns'
import DaysBetweenDatesApp from './DaysBetweenDates/DaysBetweenDatesApp'

const dateFormat = 'dd/MM/yyyy'
const currentDate = format(new Date(), dateFormat)

const App = () => {
  return (
    <DaysBetweenDatesApp
      dateFormat={dateFormat}
      currentDate={currentDate}/>
  )
}

render(<App/>, document.getElementById('app'))
