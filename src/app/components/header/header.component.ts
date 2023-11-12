import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subject, takeUntil } from "rxjs";
import { selectAllTasks } from "src/app/store/selectors/task.selectors";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit, OnDestroy {
    currentDate!: string;
    tasksCount!: number;
    doneCount!: number;
    destroy$: Subject<void> = new Subject<void>();
    constructor(private store: Store) {}
    ngOnInit(): void {
        this.updateCurrentDate();
        this.store
            .select(selectAllTasks)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: tasks => {
                    this.tasksCount = tasks.length;
                    this.doneCount = tasks.filter(task => task.done).length;
                },
            });
    }
    private updateCurrentDate(): void {
        const options: Intl.DateTimeFormatOptions = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };

        const date = new Date();
        this.currentDate = date.toLocaleDateString(undefined, options);
    }
    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
