import { CurrencyInput } from './components/CurrencyInput'
import './App.css'
import { useEffect } from 'react'

function App() {

  let options = [
    {name: "Dollar"},
    {name: "Euro"},
    {name: "Bolivar"},
]

  const BASE_URL = 'https://api.fxratesapi.com/latest'

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }, [])

  return (
    <>
      <h1>Currency Swap</h1>
      <p>Select the currency you want to convert to using the inputs below</p>
      <p>From</p>
      <CurrencyInput options={options} />
      <p>To</p>
      <CurrencyInput options={options} />
    </>
  )
}

export default App
