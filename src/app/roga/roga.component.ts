import { Component, OnInit, ViewEncapsulation } from "@angular/core"
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective } from "@angular/forms"
import { Option, Data } from "../app.types"
import { RogaService } from "./services/roga.service"

type List = {
    label: string
    value: "local" | "other"
}

@Component({
    selector: "app-roga",
    templateUrl: "./roga.component.html",
    styleUrls: ["./roga.component.css"],
    encapsulation: ViewEncapsulation.None,
})
export class RogaComponent implements OnInit {
    public formData: FormGroup = new FormGroup({})
    address: "local" | "other" = "local"

    constructor(private builder: FormBuilder, private rogaService: RogaService) {}

    list: List[] = [
        { label: "La misma dirección de envío", value: "local" },
        { label: "Usar otra dirección", value: "other" },
    ]

    options: Option[] = [
        { label: "Trabajo A", value: "A" },
        { label: "Trabajo B", value: "B" },
        { label: "Trabajo C", value: "C" },
    ]

    countryList: Option[] = [
        { label: "México", value: "MX" },
        { label: "USA", value: "USA" },
    ]

    stateList: Option[] = [
        { label: "CDMX", value: "CMDX" },
        { label: "Chihuahua", value: "CH" },
        { label: "Estado de México", value: "EDO MX" },
    ]

    ngOnInit(): void {
        this.createForm()
    }

    createForm() {
        this.formData = new FormGroup({
            name: new FormControl("", [Validators.required]),
            firstName: new FormControl("", [Validators.required]),
            lastName: new FormControl("", [Validators.required]),
            email: new FormControl("", [Validators.required, Validators.email]),
            birthDate: new FormControl("", [Validators.required]),
            occupation: new FormControl("", [Validators.required]),
            gender: new FormControl("F", [Validators.required]),
            postalCode: new FormControl("", [
                Validators.required,
                Validators.pattern("^\\d+$"),
                Validators.minLength(5),
            ]),
            street: new FormControl("", [Validators.required]),
            cologne: new FormControl("", [Validators.required]),
            country: new FormControl("", [Validators.required]),
            city: new FormControl("", [Validators.required]),
            state: new FormControl("", [Validators.required]),
            accept: new FormControl(false, [Validators.required, Validators.requiredTrue]),
        })
    }

    get postalCode() {
        return this.formData.get("postalCode")
    }

    handle(e: FormGroupDirective) {
        const data: Data = e.form.value
        this.rogaService.addItem({
            name: data.name,
        })
    }

    changeCheck(key: string) {
        this.formData.get("gender")?.setValue(key)
    }

    changeAccept(value: boolean) {
        this.formData.get("accept")?.setValue(value)
    }

    handleSelectAddress(key: "local" | "other") {
        this.address = key
    }
}
