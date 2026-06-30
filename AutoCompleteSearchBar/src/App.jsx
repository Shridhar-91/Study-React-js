import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [results, setResults] =useState([]);
  const [input, setInput] =useState("");

  const fetchData = async () => { 
    const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const json = await data.json();
    setResults(json?.recipes);
  };

  useEffect(()=>{
    fetchData();
  },[input])

  console.log(results)

  return (
      <div className="app">
        <span>AutoComplete Search Bar</span>
        <div>
          <input 
            type="text" 
            className="search-input"
            placeholder='Search data'
            value = {input}
            onChange={(e)=> setInput(e.target.value)}
          />
          <div className="results-container">
            {results.map((r) =>  {
              <span className="result" key ={r.id}>{r.name}</span>
            })}
          </div> 
        </div>
      </div>
  );
}

export default App
