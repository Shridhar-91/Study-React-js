
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import useFetch from "./Hooks/useFetch";
function App() {

  const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/users");

  if(loading){
    return <h2> Loading......</h2>;
  }

  if(error){
    return <h2>{error}</h2>;
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
        </div>
        <div style = {{padding:"20px"}}>
          <h1>User list</h1>
          {data.map((user) =>(
            <div key = {user.id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <hr/>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default App
