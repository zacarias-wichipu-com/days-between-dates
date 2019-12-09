import React from 'react'
import { render } from 'react-dom'
import App from './components/DaysBetweenDates/App'

const dateFormat = 'dd/MM/yyyy'

const DaysBetweenDates = () => {
  return (
    <App
      dateFormat={dateFormat}/>
  )
}

render(
  <DaysBetweenDates/>,
  document.getElementById('app')
)
