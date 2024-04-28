import { Component, OnInit } from "@angular/core";
import { ChartsGenerator } from "./chartsGenerator";
import { HttpClientModule } from "@angular/common/http";
import { delay } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { datumType } from "./shared/datum";

import { DatumServiceService } from "./services/datum-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor() {}
}
