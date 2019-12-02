import React from 'react'
import { render } from 'react-dom'
import './app.css'

const App = () => {
  return (
    <article>
      <header>
        <h1>Days Between Date</h1>
      </header>
      <div>
        <h3>From</h3>
        Date Component
      </div>
      <div>
        <h3>To</h3>
        Date Component
      </div>
      <button>
        Calculate
      </button>
      <div>
        Result
      </div>
    </article>
  )
}

render(<App/>, document.getElementById('app'))
