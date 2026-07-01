import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [results, setResults] =useState([]);
  const [input, setInput] =useState("");
  const [cache, setCache] =useState({});

  const fetchData = async () => { 
    if(cache[input]){
      console.log("Returned cache : ", input);
      setResults(cache[input]);
      return;
    }
    console.log("API Input : ", input)
    const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const json = await data.json();
    setResults(json?.recipes);
    setCache((prev)=>({...prev, [input]:json?.recipes}))
  };

  useEffect(() => {
    // fetchData();
    const timer = setTimeout(fetchData, 300);
    return() => {
      clearTimeout(timer);
    };
  },[input]);

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
            {results.map((r) => (
              <span className="result" key={r.id}>{r.name}</span>
            ))}
          </div> 
        </div>
      </div>
  );
}

export default App
