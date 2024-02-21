// import { useState } from 'react'
import { useReducer } from 'react'

import './App.css'

// imagine an object that has a lot of keys and data, reducer can be a way to make this cleaner and easier. complex state etc..

// https://react.dev/reference/react/useReducer

function UserForm() {
  const [state,dispatch] =useReducer((state, action) => ({
    // combine the current state with whatever comes back on the action
      ...state,
      ...action,
  }),{
    first: "",
    last:"",
  })
  return (
      <div>
        <input type="text" value={state.first} 
        // dispatch with whatever key we want to change
        onChange={(e) => dispatch({ first: e.target.value})}/>
        <input type="text"  value={state.last}
        onChange={(e) => dispatch({ last: e.target.value})} />

        <div>
          First: {state.first} 
          <div>
          Last: {state.last}
          </div>
        </div>
      </div>
  );
}


function NameList() {
  // use reducer just like useState returns an array with two elements, first current state, second dispatch(way to envoke reducer) 
  // first thing we need to do is define what's going in the state, in this case, list of names: empty array and current name: empty string
const [ state, dispatch ] = useReducer((state, action) => {
  // switch on a type, comes in from action when you dispatch object it will have a type on it.
switch(action.type) {
  case "SET_NAME":
    // return new version of state, take all existing state and add a name that comes in on payload. (creates a new object so that react can tell the diff and just mutate the fields we want to mutate.)
    return {...state, name: action.payload};
    case "ADD_NAME":
      // all of the existing names plus new names
      return {
        ...state, 
        names: [...state.names, state.name],
      name: "",
    };
}
  }, {
  names: [],
  name: "",
});

  return (
    <>
    {/* grab my list of names from state and update the html */}
    <div>
      {state.names.map((name, index) => (
        <div key ={index}>{name}</div>
      ))}
    </div>

    {/* everytime we change input field we dispatch to the reducer function, feed it the current state and action.  */}
   <input 
   type="text"
   value={state.name}
   onChange={e => dispatch({ type: "SET_NAME", payload: e.target.value})}
    />

    <button
    onClick={() => dispatch({type: "ADD_NAME"})}>Add Name</button>
    </>

  )
}



function App() {
  return (
    <div>
      <UserForm />
      <NameList />
    </div>
  )
}

export default App
