import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Components } from './component/component';
import { Product } from './service/product';
import { Products } from './interfaces/Product';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Components, RouterLink, Header, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('My first Angular App');
  name = signal('Ajibola Alim');
  productData:
    | {
        name: string;
        category: string;
        price: number;
      }[]
    | undefined;
  productDatas : any;
  products : Products[] = [];
  // constructor(private product: Product) {}
  // getData() {
  //   this.productData = this.product.getProductData();
  // }
//   ngOnInit() {
//  this.product.productList().subscribe((data: any) => {
//     console.log(data);
//     this.productDatas = data.products;
//   });
//   }

constructor(private productInfo: Product){}
ngOnInit(){
  this.getProduct();
}

getProduct(){
  this.productInfo.getProduct().subscribe((data: Products[]) => {
    this.products = data;
  });
}
addProduct(product: Products){
  this.productInfo.saveProduct(product).subscribe((data: Products) => {
    console.log(data);

    if (data) {
      this.getProduct();
    }
  });
}
}