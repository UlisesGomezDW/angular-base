import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppComponent } from "./app.component"
import { UsersModule } from "./users/users.module"
import { AppRoutingModule } from "./app-routing.module"
import { HomeComponent } from "./home/home.component"
import { RogaModule } from "./roga/roga.module"

@NgModule({
    declarations: [AppComponent, HomeComponent],
    imports: [BrowserModule, UsersModule, RogaModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
