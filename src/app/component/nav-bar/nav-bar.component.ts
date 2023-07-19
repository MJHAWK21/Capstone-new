import { Component } from '@angular/core';
import { Product } from 'src/app/Model/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  // searchKeyword!: string;
  // searchResults!: Product[];

  // constructor(private productService: ProductService) {}

  // search() {
  //   console.log("1");
  //   this.productService.searchProducts(this.searchKeyword)
  //     .subscribe(results => {
  //       this.searchResults = results
  //     });
  // }

}
