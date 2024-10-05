import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Button from './components/Button'

export default function App() {
  const [count, setCount] = useState(0)
  const [tabContent, setTabContent] = useState('')

  function handleClick(type) {
    setTabContent(type)
    console.log('clicked', type)
  }
  
  return (
    <>
      <Header></Header>
      <Button onClick={() => handleClick('description')}>Описание</Button>
      <Button onClick={() => handleClick('stats')}>Статистика</Button>
      <Button onClick={() => handleClick('adbout')}>Обо мне</Button>
      <p>{tabContent}</p>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}
