import { Component, Input } from "@angular/core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { TaskService } from "src/app/services/task.service";
import { Task } from "src/app/types/task.interface";

@Component({
    selector: "app-task-item",
    templateUrl: "./task-item.component.html",
    styleUrls: ["./task-item.component.css"],
})
export class TaskItemComponent {
    @Input() task!: Task;
    isDeleted: boolean = false;

    editMode: boolean = false;
    xMark = faXmark;
    constructor(private taskService: TaskService) {}

    updateTask() {
        this.taskService.updateTask(this.task);
    }
    onDelete(id: number) {
        this.taskService.removeTask(id);
        this.isDeleted = true;
    }
    setEditMode(newValue: boolean) {
        this.editMode = newValue;
    }
}
