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

function onTodoItem({ todo, index, onClick }) { 
  const clases = [];
  if (todo.copmleted) { 
    clases.push('done')
  }
   return <li style={styles.li}>
     <span className={clases.join(' ')}>
       <input
         type="checkbox"
         style={styles.input}
         onClick={() => onClick(todo.id)}
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
  onClick:PropTypes.func.isRequired
}

export default onTodoItem