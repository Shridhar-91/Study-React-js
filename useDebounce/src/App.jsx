import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import useDebounce from "./until/useDebounce";

function App() {
  const [search, setSearch] = useState("");

  const debounceSearch = useDebounce(search, 1000);

  useEffect(() => {
    if(debounceSearch){
      console.log("API Call with search term: ", debounceSearch);
    }
  }, [debounceSearch]);

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
      <div className="input"> 
          <input type ="text" placeholder='Search...' value = {search} onChange={(e)=>setSearch(e.target.value)} />
      </div>
    </>
  )
}

export default App
