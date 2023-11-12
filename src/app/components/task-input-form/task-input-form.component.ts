import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { take } from "rxjs";
import { taskActions } from "src/app/store/actions/task.actions";
import { selectAllTasks } from "src/app/store/selectors/task.selectors";
import { Task } from "src/app/types/task.interface";

@Component({
    selector: "app-task-input-form",
    templateUrl: "./task-input-form.component.html",
    styleUrls: ["./task-input-form.component.css"],
})
export class TaskInputFormComponent {
    constructor(private store: Store) {}
    handleSubmit(taskInput: string) {
        this.store
            .select(selectAllTasks)
            .pipe(take(1))
            .subscribe({
                next: tasks => {
                    const maxId =
                        tasks.length > 0
                            ? Math.max(...tasks.map(task => task.id))
                            : 0;
                    const newTask: Task = {
                        id: maxId + 1,
                        title: taskInput,
                        done: false,
                    };
                    this.store.dispatch(taskActions.addTask({ task: newTask }));
                },
                error: error => {
                    console.error("An error occurred:", error);
                },
            });
    }
}
