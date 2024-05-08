import React from 'react'
import { useState } from 'react'

function App() {
  const [color, setColor] = useState("white")
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <h1 className='text-center p-8 text-blue-100 text-3xl font-medium '>BackgroundColor Changer Website </h1>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2  '>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button onClick={() => setColor('red')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'red'}}>Red</button>
        <button onClick={() => setColor('green')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'green'}}>Green</button>
        <button onClick={() => setColor('Blue')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'Blue'}}>Blue</button>
        <button onClick={() => setColor('Grey')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'Grey'}}>Grey</button>
        <button onClick={() => setColor('orange')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'orange'}}>orange</button>
        <button onClick={() => setColor('yellow')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'yellow'}}>yellow</button>
        <button onClick={() => setColor('pink')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'pink'}}>Pink</button>
        <button onClick={() => setColor('olive')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'olive'}}>olive</button>
        <button onClick={() => setColor('black')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'black'}}>Black</button>
      </div>
    </div>
    </div>
  )
  
}

export default App