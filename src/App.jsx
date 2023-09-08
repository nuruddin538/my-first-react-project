import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './Count';
import Team from './Team';
import Users from './users';
import Friends from './friends';


function App() {
  function handleClick() {
    alert('button clicked')
  }
  const handleClick2 = () => {
    alert('button 2 click')
  }
  const adToFive = (num) => {
    alert(num + 5);
  }
  return (
    <>
      <h1>React Core Concepts</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Count></Count>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me</button>
      <button onClick={() => { alert('third clicked') }}>third clicked</button>
      <button onClick={() => adToFive(3)}>Four</button>
    </>
  )
}
export default App
