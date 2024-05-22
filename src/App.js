import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [todos, setToDos] = useState([]);
  const inputRef = useRef();

  const handleAddToDo = () => {
    const text = inputRef.current.value;
    const newItem = {
      completed: false,
      text,
    };
    setToDos([...todos, newItem]);
    inputRef.current.value = "";
  };

  const handleItemDone = (index) => {
    const newtodos = [...todos];
    newtodos[index].completed = !newtodos[index].completed;
    setToDos(newtodos);
  };

  const handleDeleteItem = (index) => {
    const newtodos = [...todos];
    newtodos.splice(index, 1);
    setToDos(newtodos);
  };

  return (
    <div className="App">
      <div className="todo-container">
        <h2>To Do List</h2>
        <ul>
          {todos.map(({ text, completed }, index) => {
            return (
              <div>
                <li
                  className={completed ? "done" : ""}
                  key={index}
                  onClick={() => handleItemDone(index)}>
                  {text}
                </li>
                <span onClick={() => handleDeleteItem(index)}>❌</span>
              </div>
            );
          })}
        </ul>
        <input ref={inputRef} placeholder="Enter Item ..." />
        <button onClick={handleAddToDo}>Add</button>
      </div>
    </div>
  );
}

export default App;
