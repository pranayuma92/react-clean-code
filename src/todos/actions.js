export const createTodo = todo => ({
    type: 'CREATE_TODO',
    payload: { todo }
})

export const removeTodo = todo => ({
    type: 'REMOVE_TODO',
    payload: { todo }
})

export const markTodoAsCompleted = todo => ({
    type: 'MARK_TODO_AS_COMPLETED',
    payload: { todo }
})

export const loadTodosInProgress = () => ({
    type: 'LOAD_TODOS_IN_PROGRESS'
})

export const loadTodosSuccess = todos => ({
    type: 'LOAD_TODOS_SUCCESS',
    payload: { todos }
})

export const loadTodosFailure = () => ({
    type: 'LOAD_TODOS_FAILURE'
})