import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
   const [value , setValue] = useState(5);


   useEffect(() => {
     setValue(10);
   }, []);
   

  return (
   
    <>
    <h1>{value}</h1>
    <button onClick={() => setValue(50)}>Set to 50</button>
    </>
  )
}

export default App
