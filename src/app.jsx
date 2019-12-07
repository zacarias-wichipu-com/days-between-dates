import React from 'react'
import { render } from 'react-dom'
import { format } from 'date-fns'
import App from './components/DaysBetweenDates/App'

const dateFormat = 'dd/MM/yyyy'
const currentDate = format(new Date(), dateFormat)

const DaysBetweenDates = () => {
  return (
    <App
      dateFormat={dateFormat}
      currentDate={currentDate}/>
  )
}

render(
  <DaysBetweenDates/>,
  document.getElementById('app')
)
