import { createReducer, on } from "@ngrx/store";
import { Task } from "src/app/types/task.interface";
import { taskActions } from "../actions/task.actions";

export interface TaskState {
    tasks: Task[];
}

export const initialState: TaskState = {
    tasks: [
        { id: 1, title: "Task 1", done: false },
        { id: 2, title: "Task 2", done: true },
        { id: 3, title: "Task 3", done: false },
    ],
};

export const taskReducer = createReducer(
    initialState,
    on(taskActions.addTask, (state, { task }) => {
        const tasks = [...state.tasks, task];
        return { ...state, tasks };
    }),

    on(taskActions.removeTask, (state, { taskId }) => {
        const tasks = state.tasks.filter(task => task.id !== taskId);
        return { ...state, tasks };
    }),

    on(taskActions.updateTask, (state, { updatedTask }) => {
        const tasks = state.tasks.map(task =>
            task.id === updatedTask.id ? { ...task, ...updatedTask } : task
        );
        return { ...state, tasks };
    })
);
