import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subject, takeUntil } from "rxjs";
import { selectAllTasks } from "src/app/store/selectors/task.selectors";
import { Task } from "src/app/types/task.interface";

@Component({
    selector: "app-tasks-list",
    templateUrl: "./tasks-list.component.html",
    styleUrls: ["./tasks-list.component.css"],
})
export class TasksListComponent implements OnDestroy, OnInit {
    constructor(private store: Store) {}
    tasks: Task[] = [];
    destroy$: Subject<void> = new Subject<void>();
    ngOnInit(): void {
        this.loadTasks();
    }

    loadTasks() {
        this.store
            .select(selectAllTasks)
            .pipe(takeUntil(this.destroy$))
            .subscribe(tasks => (this.tasks = tasks));
    }
    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
