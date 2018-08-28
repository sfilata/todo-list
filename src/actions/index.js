let nextTodoId = localStorage.getItem("nextTodoId") || 0;

export const addTodo = text => {
    localStorage.setItem("nextTodoId", ++nextTodoId);
    return {
        type: 'ADD_TODO',
        id: nextTodoId,
        text
    };
};

export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    };
};

export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};

export const getState = () => {
    return {
        type: 'GET_STATE'
    };
};

export const deleteTodo = id => {
    return {
        type: 'DELETE_TODO',
        id
    };
};