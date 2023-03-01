import { Component } from '@angular/core';

import { categories } from '../categories';
export var category_Name = "";

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent {
    categories = [...categories]
    changeVal(name:string) {
      // console.log(name)
      category_Name = name
    }
}
