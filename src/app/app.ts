import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Components } from './component/component';
import { Product } from './service/product';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Components, RouterLink, Header],
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
  products : any;
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

constructor(private product: Product){}
ngOnInit(){
  this.product.getProduct().subscribe((data: any)=>{
    this.products = data
  })
}
}