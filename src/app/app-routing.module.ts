import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainCompComponent } from "./main-comp/main-comp.component";

const baseurl = "http://localhost:4200";

const routes: Routes = [
  {
    path: "",
    component: MainCompComponent,
    data: { title: "Product Detaixfls" },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
