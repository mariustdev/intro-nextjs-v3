import Todo from "@/components/Todo";

const TodoList = ({todos}) => {
  return (
    <div className="flex flex-col gap-2 p-5">
      {todos.map(todo => (<Todo key={todo.id} todo={todo} />))}
    </div>
  )
}

export default TodoList;
