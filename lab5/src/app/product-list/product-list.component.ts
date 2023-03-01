import { Component, Input } from '@angular/core';

import { category_Name } from 'src/app/product-categories/product-categories.component'

import { Product, products } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
 
  category_Name:string 
 
  products = [...products];


  @Input() product: Product | undefined;

  constructor(){ 
    this.category_Name = category_Name 
  }
  filteredProducts(){ 
    // console.log(category_Name)
    return this.products.filter(c => c.category === category_Name ); 
  } 

 


  share() {
    window.alert('The product has been shared!');
  }


  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  pressLike(product: Product){ 
    product.like++;
  } 
}




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/