import { Component, OnInit } from '@angular/core';
import { ChartsGenerator } from '../chartsGenerator';
import { HttpClientModule } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { datumType } from "../shared/datum";
import { DatumServiceService } from "../services/datum-service.service";

@Component({
  selector: 'app-main-comp',
  templateUrl: './main-comp.component.html',
  styleUrls: ['./main-comp.component.scss']
})
export class MainCompComponent implements OnInit {


  value: string;
  // datum1:datumType[];
  // datum2:datumType[];

  datum1;
  datum2;

  brandsArr;
  
  isolatedData = {
    "year": 2019,
    "income": 43.5,
    "expenses": 38.2
  }

  constructor(private cg: ChartsGenerator, private ds: DatumServiceService) { }

  ngOnInit() {
    this.ds.GetIssues("datum1").subscribe(res => {
      this.datum1 = res
      this.cg.createCharts("infogr-1", this.datum1);
    })

    this.ds.GetIssues("datum2").subscribe(res => {
      this.datum2 = res
      this.cg.createCharts("infogr-2", this.datum2);
    })

    //Populate Select
    this.ds.getBrands().subscribe(r => {
      this.brandsArr = r;     
    })
    
  }
}
