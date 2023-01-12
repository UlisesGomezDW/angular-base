import { Component, Input, OnInit } from "@angular/core"
import { FormControl } from "@angular/forms"
import { Option } from "./../../app.types"

@Component({
    selector: "app-select",
    templateUrl: "./select.component.html",
    styleUrls: ["./select.component.css"],
})
export class SelectComponent implements OnInit {
    @Input() placeholder: string = ""
    @Input() control: FormControl = new FormControl()
    @Input() options: Option[] = []

    visible: boolean = false
    open: boolean = false

    handleOpen(input: HTMLInputElement) {
        this.visible = true
        this.open = true
        input.focus()
    }

    handleClose() {
        setTimeout(() => {
            if (!this.control.value) {
                this.visible = false
                this.open = false
            }
        }, 100)
    }

    handleSelect(value: string) {
        this.control.setValue(value)
        this.open = false
    }

    hide() {
        return false
    }

    ngOnInit() {}
}
