import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
    currentDate!: string;
    @Input() doneCount!: string;
    ngOnInit(): void {
        this.updateCurrentDate();
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
}
