import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    // Start the animation loop immediately
    const startLoop = () => {
      setAnimationKey(prev => prev + 1)
    }

    // Start first animation immediately
    startLoop()

    // Set up continuous loop every 4 seconds
    const interval = setInterval(startLoop, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="app">
      <div className="scene">
        {/* Background Japan image */}
        <img 
          src="/japao.png" 
          alt="Japão" 
          className="japan-bg"
        />
        
        {/* Hitomi image (small, positioned on top of Japan) */}
        <img 
          src="/hitomi.png" 
          alt="Hitomi" 
          className="hitomi"
        />
        
        {/* Bomb animation - key prop forces restart */}
        <div key={`bomb-${animationKey}`} className="bomb falling">
          💣
        </div>
        
        {/* Fullscreen explosion effect */}
        <div key={`explosion-${animationKey}`} className="explosion-fullscreen">
          <div className="explosion-center">💥</div>
          <div className="explosion-flash"></div>
          <div className="explosion-particles">
            <div className="particle">🔥</div>
            <div className="particle">🔥</div>
            <div className="particle">🔥</div>
            <div className="particle">🔥</div>
            <div className="particle">💥</div>
            <div className="particle">💥</div>
            <div className="particle">⚡</div>
            <div className="particle">⚡</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
