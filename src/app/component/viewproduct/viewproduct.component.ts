import { Component } from '@angular/core';
import { Product } from 'src/app/Model/product';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent {
  products: Product[] = [];
  router: any;

  constructor(private cartService: CartService, private productService: ProductService) {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
      console.log(products);
    });

    console.log(this.products);
  }

  // addToCart(product: Product) {
  //   this.cartService.addToCart(product);
  
  // }
  navigateToUpdate(productId: number) {
    this.router.navigate(['/update-product', productId]);
  }
  

}
