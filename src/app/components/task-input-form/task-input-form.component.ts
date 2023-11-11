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
            .subscribe(tasks => {
                const maxId = Math.max(...tasks.map(task => task.id));
                const newTask: Task = {
                    id: maxId + 1,
                    title: taskInput,
                    done: false,
                };
                this.store.dispatch(taskActions.addTask({ task: newTask }));
            });
    }
}
