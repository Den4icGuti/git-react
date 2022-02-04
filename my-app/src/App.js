import React from 'react';
import TodoList from './todo/TodoList'

function App() { 
  const [todos, setTodos] = React.useState([
  { id: 1, copmleted: false, title: 'Введение в React' },
  { id: 2, copmleted: false, title: 'Изучение основ React' },
  { id: 3, copmleted: false, title: 'Изучение компонетов React'},
])
 
 function toggleTodo(id) {
  setTodos
     (todos.map(todo => { 
       if (todo.id === id) { 
         todo.copmleted = !todo.copmleted;
       }
        return todo 
   }))
   
}


  return (
    <div className='wrapper'>
      <h1>Hello React</h1>
      <TodoList todos={todos}  onToggle={toggleTodo}/>
   </div>
  );


}


export default App;
