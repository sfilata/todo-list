import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, text, onDelete }) => (
    <div>
        <li 
        onClick={onClick} 
        style={{ textDecoration: completed ? 'line-through' : 'none', display: "inline-block"}}>
            {text} &nbsp;&nbsp;&nbsp;
        </li>
        <button
        style={{display: "inline-block"}} 
        onClick={onDelete}>
            delete
        </button>
    </div>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo;