const todos = (state = JSON.parse(localStorage.getItem("state")) || [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(todo => 
                (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo
            );
        case 'GET_STATE':
            localStorage.setItem("state", JSON.stringify(state));
            return state;
        case 'DELETE_TODO':
            let index = -1;
            for (var i = 0; i < state.length; i++) {
                if (state[i].id === action.id) {
                    index = i;
                    break;
                }
            }
            let result = state.slice(0);
            result.splice(index, 1);
            return result;
        default:
            return state;
    }
};

export default todos;