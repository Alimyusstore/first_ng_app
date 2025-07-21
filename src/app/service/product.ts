import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../interfaces/Product';
import { Observable } from 'rxjs';

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
// productList(){
//   const url = 'https://dummyjson.com/products';
//   return this.http.get(url)
// }
getProduct(): Observable<Products[]>{
  const url = 'http://localhost:3000/products';
  return  this.http.get<Products[]>(url);
}
saveProduct(product: Products): Observable<Products>{
  const url = 'http://localhost:3000/products';
  return  this.http.post<Products>(url, product); 
}
deleteProduct(){

}
updateProduct(){}
}
