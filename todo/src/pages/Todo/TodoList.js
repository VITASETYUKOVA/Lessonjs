import TodoItem from "./TodoItem";

const TodoList = ({todos, deleteTodo, toggleTodo}) => {
        return (
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                    />
                ))}

                {todos.length === 0 ? <p>TodoList is empty!</p> : ""}
            </div>
        )
    }

export default TodoList;