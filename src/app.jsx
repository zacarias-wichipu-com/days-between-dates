import React from 'react'
import { render } from 'react-dom'
import DaysBetweenDatesApp from './DaysBetweenDates/DaysBetweenDatesApp.jsx'

const App = () => {
  return (
    <DaysBetweenDatesApp/>
  )
}

render(<App/>, document.getElementById('app'))
