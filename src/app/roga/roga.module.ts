import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { RogaComponent } from "./roga.component"
import { InputComponent } from "../core/input/input.component"

@NgModule({
    declarations: [InputComponent, RogaComponent],
    exports: [RogaComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class RogaModule {}
