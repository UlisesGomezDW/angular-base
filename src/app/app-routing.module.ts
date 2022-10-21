import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { UsersComponent } from "./users/users.component"
import { HomeComponent } from "./home/home.component"

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "basic", component: UsersComponent },
    { path: "gifs", component: UsersComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
