import axios from 'axios'
import React, { useEffect, useState } from 'react'

export function App() {
  const [currencyRates, setCurrencyRates] = useState({ rates: [] })
  const [currencyAmount, setCurrencyAmount] = useState(1)

  useEffect(async function () {
    const response = await axios.get(
      'http://api.exchangeratesapi.io/v1/latest?access_key=7376d88a94a86cb7c2858fb5394939b7'
    )

    setCurrencyRates(response.data)
  })

  useEffect(
    function () {
      console.log(currencyRates)
    },
    [currencyRates]
  )
  return (
    <div>
      <header>
        <h1>Currency Converter</h1>
      </header>
      <main>
        <span>
          <input type="number" placeholder="Enter a number in USD"></input>
        </span>
        <span>
          <button>Convert</button>
        </span>
        <ul>
          {Object.entries(currencyRates.rates).map(function ([
            currencyCode,
            currencyValue,
          ]) {
            return (
              <li key={currencyCode}>
                {currencyCode}: {(currencyValue * currencyAmount).toFixed(2)}
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  )
}
