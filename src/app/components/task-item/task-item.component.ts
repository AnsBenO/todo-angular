import { Component, Input, OnInit } from "@angular/core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Store } from "@ngrx/store";
import { taskActions } from "src/app/store/actions/task.actions";
import { Task } from "src/app/types/task.interface";

@Component({
    selector: "app-task-item",
    templateUrl: "./task-item.component.html",
    styleUrls: ["./task-item.component.css"],
})
export class TaskItemComponent implements OnInit {
    @Input() task!: Task;
    editMode: boolean = false;
    newDone!: boolean;
    newTitle: string = "";
    xMark = faXmark;
    constructor(private store: Store) {}
    ngOnInit(): void {
        this.newDone = this.task.done;
        this.newTitle = this.task.title;
    }

    updateTask() {
        const updatedTask: Partial<Task> = {
            title: this.newTitle,
            done: this.newDone,
        };
        this.store.dispatch(
            taskActions.updateTask({ updatedTask: updatedTask })
        );
        this.editMode = false;
    }
    onDelete(id: number) {
        this.store.dispatch(taskActions.removeTask({ taskId: id }));
    }
    setEditMode(newValue: boolean) {
        this.editMode = newValue;
    }
}
