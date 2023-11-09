import { Injectable } from "@angular/core";
import { Task } from "../types/task.interface";

@Injectable({
    providedIn: "root",
})
export class TaskService {
    getAllTasks() {
        return JSON.parse(localStorage.getItem("tasks") || "[]") as Task[];
    }

    addTask(task: Task) {
        const existingTasks = this.getAllTasks();
        const newTask = task;
        existingTasks.push(newTask);
        localStorage.setItem("tasks", JSON.stringify(existingTasks));
    }
    removeTask(taskID: number) {
        const existingTasks = this.getAllTasks();

        // Filter out the task with the given taskID
        const updatedTasksArray = existingTasks.filter(
            task => task.id !== taskID
        );
        localStorage.setItem("tasks", JSON.stringify(updatedTasksArray));
    }

    updateTask(updatedTask: Task): void {
        const existingTasks = this.getAllTasks();

        // Find the index of the task with the given taskID
        const taskIndex = existingTasks.findIndex(
            task => task.id === updatedTask.id
        );

        // If the task with the given taskID is found, update its properties
        if (taskIndex !== -1) {
            existingTasks[taskIndex] = {
                ...existingTasks[taskIndex],
                ...updatedTask,
            };

            localStorage.setItem("tasks", JSON.stringify(existingTasks));
        }
    }
}
