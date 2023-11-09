import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-task-input-form",
    templateUrl: "./task-input-form.component.html",
    styleUrls: ["./task-input-form.component.css"],
})
export class TaskInputFormComponent {
    @Output() submittedTask = new EventEmitter<string>();

    handleSubmit(taskInput: string) {
        taskInput && this.submittedTask.emit(taskInput);
    }
}
