import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { TaskInputFormComponent } from "./components/task-input-form/task-input-form.component";
import { HeaderComponent } from "./components/header/header.component";
import { TasksListComponent } from "./components/tasks-list/tasks-list.component";
import { FormsModule } from "@angular/forms";
import { TaskItemComponent } from './components/task-item/task-item.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        AppComponent,
        TaskInputFormComponent,
        HeaderComponent,
        TasksListComponent,
        TaskItemComponent,
        CheckboxComponent,
    ],
    imports: [BrowserModule, FormsModule, FontAwesomeModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
