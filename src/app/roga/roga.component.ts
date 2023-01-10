import { Component } from "@angular/core"
import { NgForm } from "@angular/forms"

type Data = {
    name: string
}

@Component({
    selector: "app-roga",
    templateUrl: "./roga.component.html",
    styleUrls: ["./roga.component.css"],
})
export class RogaComponent {
    handle(e: NgForm) {
        console.log(e.value)
    }
}
