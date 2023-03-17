import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { KaufenComponent } from "./kaufen.component";
import { VerkaufenComponent } from "./verkaufen.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, KaufenComponent, VerkaufenComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "kaufen",
        component: KaufenComponent
      },
      {
        path: "verkaufen",
        component: VerkaufenComponent
      },
      {
        path: "**",
        redirectTo: "/kaufen",
        pathMatch: "full"
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
