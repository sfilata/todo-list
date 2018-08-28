import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { getState } from '../actions';

let AddTodo = (({dispatch}) => {
    let input;
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return ;
                }
                dispatch(addTodo(input.value));
                dispatch(getState());
                input.value = '';
            }}>
                <input ref={node => {input = node;}} />
                <button type="submit">添加待办事项</button>
            </form>
        </div>
    );
});

export default connect()(AddTodo);