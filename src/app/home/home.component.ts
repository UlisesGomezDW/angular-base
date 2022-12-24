import { Component } from "@angular/core"

interface Path {
    name: string
    path: string
}

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
})
export class HomeComponent {
    paths: Path[] = [
        { name: "Basic", path: "basic" },
        { name: "Roga", path: "roga" },
    ]
}
