import {FC} from "react";
import {createTodo} from '@/utils/actions';

const NewTodoForm: FC = () => {
  return <div>
    <form action={createTodo}>
      <input name="content" type="text" className="border border-black"/>
      <button type="submit">New Todo</button>
    </form>
  </div>
}

export default NewTodoForm;
