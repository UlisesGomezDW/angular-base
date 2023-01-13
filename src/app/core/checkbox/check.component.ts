import { Component, Input, Output, EventEmitter } from "@angular/core"

@Component({
    selector: "app-check",
    templateUrl: "./check.component.html",
    styleUrls: ["./check.component.css"],
})
export class CheckComponent {
    @Input() label: string = ""
    @Input() type: "circle" | "box" = "box"
    @Input() value: boolean = false

    @Output() change = new EventEmitter<boolean>()

    toggle() {
        this.change.emit(!this.value)
    }
}
