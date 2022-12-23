import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { UsersComponent } from "./users/users.component"
import { HomeComponent } from "./home/home.component"
import { GifsComponent } from "./gifs/gifs.component"
import { RogaComponent } from "./roga/roga.component"

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "basic", component: UsersComponent },
    { path: "gifs", component: GifsComponent },
    { path: "roga", component: RogaComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
