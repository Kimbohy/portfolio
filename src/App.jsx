import { useState } from 'react'
import FirstPage from './assets/components/FirstPage'
import Cursus from './assets/components/Cursus'
import Test from './assets/components/test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Test /> */}
    <FirstPage />
    <Cursus />
    </>
  )
}

export default App
