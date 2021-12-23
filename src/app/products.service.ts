import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http:HttpClient) { }

  addProduct(product){
    return this.http.post("https://prekes-c282e-default-rtdb.europe-west1.firebasedatabase.app/products.json", product)
      
  }

  getProducts(){
    return this.http.get("https://prekes-c282e-default-rtdb.europe-west1.firebasedatabase.app/products.json");
  }

  deleteProduct(id){
    return this.http.delete("https://prekes-c282e-default-rtdb.europe-west1.firebasedatabase.app/products/"+id+".json");

  }

  getProduct(id){
    return this.http.get<Product>("https://prekes-c282e-default-rtdb.europe-west1.firebasedatabase.app/products/"+id+".json");
  }

  updateProduct(id, data){
    return this.http.put("https://prekes-c282e-default-rtdb.europe-west1.firebasedatabase.app/products/"+id+".json",data);
  }

}
