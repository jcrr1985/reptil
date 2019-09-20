import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { MainCompComponent } from "./main-comp/main-comp.component";


const baseurl = 'http://localhost:4200';

const routes: Routes = [

  { path: '',
  component: MainCompComponent,
  data: { title: 'Product Detaixfls' }
  },
  {
    path: 'product-details/:id',
    component: ProductDetailComponent,
    data: { title: 'Product Details' }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
