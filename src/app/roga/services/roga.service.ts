import { Injectable } from "@angular/core"
import { Info } from "./../../app.types"

@Injectable()
export class RogaService {
    private _data: Info[] = []

    get getData(): Info[] {
        return [...this._data]
    }

    addItem(event: Info) {
        console.log("confirm")
        this._data.push(event)
    }

    constructor() {}
}
