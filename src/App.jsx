import { useState } from 'react'
import './App.css'
import Header from './Header'
import Buttons from './Buttons'
import ThemeContextProvider from './ThemeContextProvider'
import ToggleContext from './ToggleButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Buttons />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <ThemeContextProvider>
        <ToggleContext />
      </ThemeContextProvider>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
