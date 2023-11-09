import { Component, EventEmitter, Input, Output } from "@angular/core";
@Component({
    selector: "app-checkbox",
    templateUrl: "./checkbox.component.html",
    styleUrls: ["./checkbox.component.css"],
})
export class CheckboxComponent {
    @Input() done!: boolean;
    @Output() doneChange = new EventEmitter<boolean>();

    toggleDone(newValue: boolean) {
        this.done = newValue;
        this.doneChange.emit(newValue);
    }
}
