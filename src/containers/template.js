import { connect } from 'react-redux';

const getVisiableTodos = (todos, filter) => {
    switch(filter) {
        case: 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case: 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        case: 'SHOW_All':
        default:
            return todos;
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisiableTodos(state.todos, state.visiableFilter)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id));
            dispatch(getState());
        }
    };
};

const template = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default template;