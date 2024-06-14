import db from "@/utils/db";
import TodoList from "@/components/TodoList";

const getData = async () => {
  const todos = await db.todo.findMany({});
  return todos;
}

const TodosPage = async () => {
  const todos = await getData();
  return (
    <div>
      <h1>Todos Page</h1>
      <TodoList todos={todos} />
    </div>
  )
}

export default TodosPage;
