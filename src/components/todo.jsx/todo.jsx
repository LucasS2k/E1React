import { useState } from "react";
export default function Task({ item, onUpdate, onComplete, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(item.title ?? "");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleUpdate() {
    onUpdate(item.id, value);
    setIsEdit(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdate(item.id, value);
    setIsEdit(false);
  }
  return (
    <div className="task">
      {isEdit ? (
        <form
          onSubmit={handleSubmit}
          className="taskUpdateForm"
          placeholder="Ingrese una tarea"
        >
          <input
            className="taskInput"
            type="text"
            value={value}
            onChange={handleChange}
          />
          <button className="button" onClick={handleUpdate}>
            Guardar
          </button>
        </form>
      ) : (
        <div className="taskInfo">
          <span className="taskTitle">{item.title}</span>
          <button className="button" onClick={() => setIsEdit(true)}>
            Editar
          </button>
          <button className="buttonDelete" onClick={() => onDelete(item.id)}>
            Eliminar
          </button>
        </div>
      )}
    </div>
  );
}
