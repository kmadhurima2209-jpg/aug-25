import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const name = 'Abburi Viswa Anshuman'
  const sub = 'Full Stack Web Development'
  const sum = (a, b) => a + b;
  

  

  return (
    <>
      <div>
        <header>
          <h1>jsx is HTML like syntax inside javascript</h1>
        </header>
      </div>

      <div>
        <p>JSX is syntactic sugar</p>
        <div>
          <br />
          <h1>HELLO WORLD</h1>
          
        </div>
      </div>

      <div className="FSWD"></div>

      <div>
      </div>
      <div>
        <button>INPUT</button>
      </div>
       <div>
       <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
     </div>
     <div>
      sum is {sum(2, 3)}
     </div>
     <div>
        <iframe> BORDER frame</iframe>
      </div>
     <div>
      <button>OUTPUT</button>  
      </div>
    </>
  )
}

export default App
