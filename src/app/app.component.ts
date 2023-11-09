import { Component, OnInit } from "@angular/core";
import { Task } from "./types/task.interface";
import { TaskService } from "./services/task.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
    constructor(private taskService: TaskService) {}
    tasks: Task[] = [];
    ngOnInit(): void {
        this.tasks = this.taskService.getAllTasks();
    }
    handleSubmittedTask(taskTitle: string) {
        const maxId = this.tasks.reduce(
            (max, task) => (task.id > max ? task.id : max),
            0
        );
        const newTask: Task = { title: taskTitle, done: false, id: maxId + 1 };
        this.taskService.addTask(newTask);
        this.tasks.push(newTask);
    }
    title = "todo-list";
}
