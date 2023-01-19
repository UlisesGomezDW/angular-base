import { Component, Input, OnInit } from "@angular/core"
import { FormControl } from "@angular/forms"

@Component({
    selector: "app-input",
    templateUrl: "./input.component.html",
    styleUrls: ["./input.component.css"],
})
export class InputComponent implements OnInit {
    @Input() placeholder: string = ""
    @Input() control: FormControl = new FormControl()
    @Input() type: string = "text"
    @Input() required: boolean = false
    @Input() error: boolean = false

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

    ngOnInit() {}
}
