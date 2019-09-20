import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatumServiceService } from "../services/datum-service.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product:any;

  constructor(private route:ActivatedRoute, private ds: DatumServiceService, private router: Router) { }

  id = this.route.snapshot.params['id']

  getProductDetail(id) {
    this.ds.getProductDetail(id)
      .subscribe((res: any) => {
        this.product = res;
        console.log('this.product', this.product)
      });
  }

  ngOnInit() {
    console.log('id', this.id)
    this.getProductDetail(this.id);

  }

}
