import { useState } from 'react';
import './App.css'

const App = () => {

  const [item, setItem] = useState("")
  const [todoList, setTodoList] = useState([])

  const itemHandler = (e) => {
    setItem(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setTodoList([...todoList, item])
    setItem("")

  }

  const deleteHandler = (i) => {
  console.log("clicked",i)
  // console.log(todoList[i])

  }
 
  return (
    <div className="App">
      <h1 className='App-header'>
        Todolist
      </h1>
      <form onSubmit={submitHandler}>
        <input type="text" value={item} onChange={itemHandler} /> <br />
        <button type="submit"> submit</button>
      </form>
      <div>
        List items
        {todoList.map((item, i) => 
          <div key ={i}>
          <span>{item}</span>
          <button onClick = {deleteHandler(i)}>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
