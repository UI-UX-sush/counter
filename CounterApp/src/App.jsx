import './App.css';
import { useState } from 'react';

function App() {

  const [count , setCount]=useState(0);

  const increment=()=>{
    setCount(prev=>prev+1)
  }
  return (
    <div className="App">
    <h2>Hello world</h2>
    <span> {count}</span><br></br>
     <button  onClick={increment}>Increment</button>
   
    </div>
  );
}

export default App;
