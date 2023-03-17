import { ChangeDetectionStrategy, Component } from "@angular/core";
const RegisteredTabs = ["kaufen", "verkaufen"];

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  tabs = RegisteredTabs;
}
