import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick, onDelete }) => {
    return (<ul>
        {todos.map((todo, index) => (
            <Todo index={index} key={index} {...todo} onClick={() => onTodoClick(todo.id)} onDelete={() => onDelete(todo.id)} />
        ))}
    </ul>);
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        })
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export default TodoList;