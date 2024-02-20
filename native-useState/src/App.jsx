import { useState } from 'react'

import './App.css'



// array of names function with use state
function NameList() {

  // add multiple pieces of state assisiciated with the same component.
  const [list, setList] = useState(["Jack", "Jill", "John"]);
  const [name, setName] = useState("");


  const onAddName = () => {
    // won't work because react thinks the reference is the same array so it won't re render
    // list.push(name);
    // setList(list);


    // the code below will work, it creates a new array with the old array value + our new name thus re rednering
    setList([...list, name]);
    setName("")
  };
  return (
    <div>
      <ul>
        {/* map through the list and give it a key for reference and value */}
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input 
      type="text"
      value={name}
      // when text changes we get an event and the value is the last thing user typed.
      onChange={(e) => setName(e.target.value)} 
      />
      <button
      onClick={onAddName}>Add Name</button>
    </div>
  )
}

function Counter() {
   // two values in array first one references value second one references setter function.
  const [count, setCount] = useState(10)


  function addOne() {
    // use setter function to set count and dynamically re render.
    setCount(count+1)
  }

  return (
    <>
      <div className="card">
      <button 
        onClick={addOne}
        >Count = {count}</button>

      </div>

    </>
  )
}

// each Counter in this app maintains it's own count thanks to useState
function App(){
  return (
    <div>
      <Counter />
      <Counter />
      <Counter />
      <Counter />

    <NameList />
    </div>
  )

}

export default App
