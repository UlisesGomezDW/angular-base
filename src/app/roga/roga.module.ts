import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { RogaComponent } from "./roga.component"
import { InputComponent } from "../core/input/input.component"
import { SelectComponent } from "../core/select/select.component"
import { CheckComponent } from "../core/checkbox/check.component"

@NgModule({
    declarations: [InputComponent, SelectComponent, CheckComponent, RogaComponent],
    exports: [RogaComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class RogaModule {}
