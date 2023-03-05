import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplete: `flex justify-between bg-green-500 p-4 my-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer`,
  button: `cursor-pointer flex items-center justify-center space-x-3`,
};

const Todo = ({ todo, toggleComplete, editTodo, deleteTodo }) => {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed ? "checked" : ""}
        />
        <p
          onClick={() => toggleComplete(todo)}
          className={todo.completed ? style.textComplete : style.text}
        >
          {todo.text}
        </p>
      </div>
      <div className={style.button}>
        <button onClick={() => editTodo(todo.id)}>{<FiEdit />}</button>
        <button onClick={() => deleteTodo(todo.id)}>{<FaRegTrashAlt />}</button>
      </div>
    </li>
  );
};

export default Todo;
