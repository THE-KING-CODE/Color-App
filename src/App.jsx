import { useState } from 'react'
import './App.css'

function App() {
  const [btn, setBtn] = useState("");

  const handleColor = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    const color = `rgb(${r},${g},${b})`
    setBtn(color)
  }

  return (
    <>
      <div className='w-full flex flex-col justify-center items-center h-90 gap-5'>
        <div style={{ backgroundColor: btn }} className="flex border w-60 h-60 justify-center items-center">Container</div>
        <button className='border hover:cursor-pointer p-1 rounded-2xl' onClick={handleColor}>Color Change</button>
      </div>
    </>
  )
}

export default App
