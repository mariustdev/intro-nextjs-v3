'use server';

import db from "@/utils/db";
import {revalidatePath} from "next/cache";

export const createTodo = async (formData) => {
  const todo = await db.todo.create({data: {content: formData.get('content')}});
  revalidatePath('/todos');
}

export const completeTodo = async (todoId: string) => {
  await db.todo.update({
    where: {id: todoId},
    data: {completed: true},
  })

  revalidatePath('/todos');
}
