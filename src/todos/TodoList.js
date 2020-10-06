import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm'
import { getTodos, getTodosLoading, getCompletedTodos, getIncompleteTodos } from './selectors'
import { loadTodos, removeTodoRequest, markAsCompletedRequest } from './thunks'
import './TodoList.css'

const TodoList = ({ completedTodos, incompleteTodos, onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos}) => {
    useEffect(() => {
        startLoadingTodos()
    }, [])

    const loadingMessage = <div>Loading...</div>
    const content =  (
        <div className="list-wrapper">
            <NewTodoForm />
            <h3>Incomplete: </h3>
            { incompleteTodos.map((todo, index) => 
                <TodoListItem
                    key={index} 
                    todo={todo} 
                    onRemovePressed={onRemovePressed}
                    onCompletedPressed={onCompletedPressed} 
                /> 
            ) }
            <h3>Completed: </h3>
            { completedTodos.map((todo, index) => 
                <TodoListItem
                    key={index} 
                    todo={todo} 
                    onRemovePressed={onRemovePressed}
                    onCompletedPressed={onCompletedPressed} 
                /> 
            ) }
        </div>
    )

    return isLoading ? loadingMessage : content
}

const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state)
})

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(markAsCompletedRequest(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)