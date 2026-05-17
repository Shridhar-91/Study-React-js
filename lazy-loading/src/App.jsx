import {useState, lazy, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const Profile = lazy (() => new Promise((resolve) => {
  setTimeout(() => {
    resolve(import("./controller/Profile"));
  }, 3000);
}));

function App() {
  const [show, setShow] = useState(false);
``
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="center-btn">
        <button onClick={() => setShow(true)}> 
          Show profile....
        </button>
      </div>
      {show && (
      <Suspense fallback = {<div>Loading Profile...</div>}>
        <Profile/>
      </Suspense>
      )}
    </>
  )
}

export default App
