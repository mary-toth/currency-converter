//@ts-nocheck

import axios from 'axios'
import React, { useEffect, useState } from 'react'

export function App() {
  const [currencyRates, setCurrencyRates] = useState({ rates: [] })
  const [currencyAmount, setCurrencyAmount] = useState(1)

  useEffect(async function () {
    const response = await axios.get(
      'http://api.exchangeratesapi.io/v1/latest?access_key=d4daa7a91b3810aa759558a367a610f4'
    )

    setCurrencyRates(response.data)
  }, [])

  useEffect(
    function () {
      console.log(currencyRates)
    },
    [currencyRates]
  )

  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Mate&display=swap');
      </style>

      <header>
        <h1>Currency Converter</h1>
      </header>
      <main>
        <span>
          <input
            type="number"
            placeholder="Enter an amount in USD"
            onChange={function (event) {
              setCurrencyAmount(event.target.value)
            }}
          ></input>
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
