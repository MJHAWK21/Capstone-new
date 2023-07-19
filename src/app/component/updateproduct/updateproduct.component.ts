import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Model/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  productId!: number;
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    image: ''
  };

  successMessage: string = ''; // Add the successMessage property

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.getProduct();
  }

  getProduct() {
    
    this.productService.getProductById(this.productId).subscribe(
      (product: Product) => {
        this.product = product;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateProduct() {
    console.log("update");
    this.productService.updateProduct(this.product).subscribe(
      () => {
        console.log('Product updated successfully.');
        this.successMessage = 'Successfully updated';
        // this.router.navigate(['/admin']); // Redirect to the admin page after successful update
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
