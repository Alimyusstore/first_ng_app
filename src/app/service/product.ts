import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Product {
// constructor(){
//   console.log('Services');
// }
// getProductData(){
//   return [
//     { name: 'Iphone', category: 'Mobile', price: 120000 },
//     { name: 'Samsung', category: 'Mobile', price: 120000 },
//     { name: 'Dell', category: 'Laptop', price: 120000 },
//   ];
// }
productDatas:any 
constructor(private http : HttpClient){}
productList(){
  const url = 'https://dummyjson.com/products';
  return this.http.get(url)
}
getProduct(){
  const url = 'http://localhost:3000/';
  return  this.http.get(url)
}
}
