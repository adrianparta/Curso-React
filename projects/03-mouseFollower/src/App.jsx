import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [enable, setEnable] = useState(true)
  const [position, setPosition] = useState({ x: 0, y: 0})

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }
    
    if(enable){
      addEventListener('pointermove', handleMove)
    }

    return () => {
      removeEventListener('pointermove', handleMove)
    }
  }, [enable])

  const handleClick = () => {
    const newEnable = !enable
    setEnable(newEnable)
  }
  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}></div>
      <button onClick={handleClick}>{enable ? 'Desactivar' : 'Activar'} seguimiento</button>
    </main>

  )
}

export default App
