import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { TaskInputFormComponent } from "./components/task-input-form/task-input-form.component";
import { HeaderComponent } from "./components/header/header.component";
import { TasksListComponent } from "./components/tasks-list/tasks-list.component";
import { FormsModule } from "@angular/forms";
import { TaskItemComponent } from "./components/task-item/task-item.component";
import { CheckboxComponent } from "./components/checkbox/checkbox.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { StoreModule } from "@ngrx/store";
import { taskReducer } from "./store/reducers/task.reducer";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

@NgModule({
    declarations: [
        AppComponent,
        TaskInputFormComponent,
        HeaderComponent,
        TasksListComponent,
        TaskItemComponent,
        CheckboxComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        FontAwesomeModule,
        StoreModule.forRoot({ "tasks": taskReducer }),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: true, // Restrict extension to log-only mode
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
