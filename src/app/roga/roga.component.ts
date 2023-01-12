import { Component, OnInit, ViewEncapsulation } from "@angular/core"
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective } from "@angular/forms"
import { Option } from "../app.types"

@Component({
    selector: "app-roga",
    templateUrl: "./roga.component.html",
    styleUrls: ["./roga.component.css"],
    encapsulation: ViewEncapsulation.None,
})
export class RogaComponent implements OnInit {
    public formData: FormGroup = new FormGroup({})

    constructor(private builder: FormBuilder) {}

    options: Option[] = [
        { label: "Trabajo A", value: "A" },
        { label: "Trabajo B", value: "B" },
        { label: "Trabajo C", value: "C" },
    ]

    ngOnInit(): void {
        this.createForm()
    }
    createForm() {
        this.formData = new FormGroup({
            name: new FormControl("", [Validators.required]),
            firstName: new FormControl("", [Validators.required]),
            lastName: new FormControl("", [Validators.required]),
            email: new FormControl("", [Validators.required]),
            birthDate: new FormControl("", [Validators.required]),
            occupation: new FormControl("", [Validators.required]),
        })
    }

    handle(e: FormGroupDirective) {
        console.log(e.form.value)
    }
}
