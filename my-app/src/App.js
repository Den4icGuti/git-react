import React from 'react';
import TodoList from './todo/TodoList'

const todos = [
  { id: 1, copmleted: false, title: 'Введение в React' },
  { id: 2, copmleted: false, title: 'Изучение основ React' },
  { id: 3, copmleted: false, title: 'Изучение компонетов React'},
]


function App() {
  return (
    <div className='wrapper'>
      <h1>Hello React</h1>
      <TodoList todos={todos} />
   </div>
  );
}

export default App;
