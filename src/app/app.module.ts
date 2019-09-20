import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule, MatIconModule, MatSidenavModule } from  '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';






import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';

import { ChartsGenerator } from './chartsGenerator';
import { DatumServiceService } from "./services/datum-service.service";

import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { MainCompComponent } from './main-comp/main-comp.component';

const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
]


@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    MainCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    ...modules,
    MatProgressSpinnerModule
  ],
  exports:[
    ...modules
  ],
  providers: [ChartsGenerator,DatumServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
