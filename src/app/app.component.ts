import { Component, OnInit } from '@angular/core';
import { ChartsGenerator } from './chartsGenerator';
import { HttpClientModule } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { datumType } from "./shared/datum";

import { DatumServiceService } from "./services/datum-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  value: string;
  // datum1:datumType[];
  // datum2:datumType[];

  datum1;
  datum2;
  
  constructor(private cg: ChartsGenerator, private ds:DatumServiceService) { }

  ngOnInit() {
    this.ds.GetIssues1().subscribe(res => {
      this.datum1 = res;
      this.cg.createCharts("infogr-1", this.datum1);
     })
     this.ds.GetIssues2().subscribe(res => {
       this.datum2 = res;
       this.cg.createCharts("infogr-2", this.datum2);
      })
    }
  }


