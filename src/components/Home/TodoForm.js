import React, { useState, useEffect, useRef } from 'react';
import { TodoInput, TodoButton, TodoInputEdit } from './home.styles'

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <TodoInputEdit
            placeholder='Update Todo'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
          />
          <TodoButton onClick={handleSubmit}>
            Update
          </TodoButton>
        </>
      ) : (
        <>
          <TodoInput
            placeholder='Add Todo'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
          />
          <TodoButton onClick={handleSubmit}>
            Add Todo
          </TodoButton>
        </>
      )}
    </form>
  );
}

export default TodoForm;
