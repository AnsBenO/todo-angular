import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectAllTasks = createSelector(
    createFeatureSelector("tasks"),
    (state: AppState) => state.tasks
);

export const selectTaskById = (taskId: number) =>
    createSelector(selectAllTasks, tasks =>
        tasks.find(task => task.id === taskId)
    );
