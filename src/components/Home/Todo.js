import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseFill } from 'react-icons/ri';
import { TiPencil } from 'react-icons/ti';
import { Icons, TodoRow } from './home.styles';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, idx) => (
    <TodoRow key={idx} >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <Icons>
        <RiCloseFill
          onClick={() => removeTodo(todo.id)}
        />
        <TiPencil
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />
      </Icons>
    </TodoRow>
  ));
};

export default Todo;
