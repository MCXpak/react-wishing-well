import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import wishData from './wishes'
import WishList from './components/WishList'
import WishForm from './components/WishForm'

function App() {

  const [wishes, setWishes] = useState(wishData)

  return (
    <div className="App">
      <WishForm wishes={wishes} setWishes={setWishes}></WishForm>
      <WishList wishes={wishes} setWishes={setWishes}/>
    </div>
  )
}

export default App
