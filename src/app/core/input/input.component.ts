import { Component, Input } from "@angular/core"

@Component({
    selector: "app-input",
    templateUrl: "./input.component.html",
    styleUrls: ["./input.component.css"],
})
export class InputComponent {
    @Input() placeholder: string = ""
    @Input() name: string = ""

    visible: boolean = false

    handleOpen(input: HTMLInputElement) {
        this.visible = true
        input.focus()
    }

    handleClose(e: FocusEvent) {
        if (!(e.target as HTMLInputElement).value) {
            this.visible = false
        }
    }
}
