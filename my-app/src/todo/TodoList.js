import React from "react";
import TodoItem from "./Todoitem";

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding:0
  },
  
}

export default function Todolist() { 
  return (
    <ul style={styles.ul}>
      <TodoItem />
      <TodoItem />
       <TodoItem/>
    </ul>
  );
}