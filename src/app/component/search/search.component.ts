import { Component } from '@angular/core';
import { Product } from 'src/app/Model/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchKeyword!: string;
  searchResults!: Product[];

  constructor(private productService: ProductService) {}

  search() {
    this.productService.searchProducts(this.searchKeyword)
      .subscribe(results => this.searchResults = results);
  }

}
