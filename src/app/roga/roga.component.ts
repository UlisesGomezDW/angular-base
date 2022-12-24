import { Component } from "@angular/core"

type Data = {
    name: string
}

@Component({
    selector: "app-roga",
    templateUrl: "./roga.component.html",
    styleUrls: ["./roga.component.css"],
})
export class RogaComponent {
    data: Data = {
        name: "",
    }

    handle() {
        console.log(this.data)
    }
}
