import { useState } from "react";
import Todo from "./todo";
export default function TodoApp() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);
  function handleInputChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    const oldTasks = [...tasks];
    oldTasks.unshift(newTask);

    setTasks(oldTasks);
    setTitle("");
  }
  function handleDelete(id) {
    const tempTasks = tasks.filter((item) => item.id !== id);

    setTasks([...tempTasks]);
  }

  function handleUpdate(id, value) {
    const temp = [...tasks];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTasks([...temp]);
  }
  function handleDeleteAll() {
    setTasks([]);
  }
  return (
    <div className="taskContainer">
      <form onSubmit={handleSubmit} className="taskCreateForm">
        <input
          onChange={handleInputChange}
          value={title}
          className="taskInput"
        />
        <input value="Crear tarea" type={"submit"} className="buttonCreate" />
      </form>
      <button className="buttonDelete" onClick={() => handleDeleteAll()}>
        Eliminar todas
      </button>
      <div className="tasksContainer">
        {tasks.map((item) => (
          <Todo
            key={item.id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
