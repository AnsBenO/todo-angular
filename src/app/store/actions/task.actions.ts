import { createAction, props } from "@ngrx/store";
import { Task } from "src/app/types/task.interface";

const addTask = createAction("[Task] AddTask", props<{ task: Task }>());
const removeTask = createAction(
    "[Task] RemoveTask",
    props<{ taskId: number }>()
);
const updateTask = createAction(
    "[Task] UpdateTask",
    props<{ updatedTask: Task }>()
);

export const taskActions = { addTask, removeTask, updateTask };
