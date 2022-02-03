import React from "react";
import PropTypes from 'prop-types';


const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 5px',
    border: '1px solid #eee',
    borderRadius: '4px',
    marginTop: '5px'
  },
  input: { 
    marginRight:'10px'
  }
}

 function onTodoItem({todo, index,onChange}) { 
   return <li style={styles.li}>
     <span>
       <input
        type="checkbox"
         style={styles.input}
         onChange={() => onChange(todo.id)}
       />
        <strong>{index + 1}</strong>
       &nbsp;
          {todo.title}
     </span>
     <button className="btn">&times;</button>
  </li>
}

onTodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange:PropTypes.func.isRequired
}

export default onTodoItem