import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
public product:Product|null=null;


  constructor(private http:HttpClient) { 
    const product=localStorage.getItem("product");
    if (product!=null){
      this.product=JSON.parse(product);
      console.log(this.product);
    }
  }
  

  public getProducts(){
    return this.http.get<Product[]>('http://localhost:4999/products/');
  }
 
  
   public getFiltredProducts(filter:String){
    return this.http.get<Product[]>('http://localhost:4999/products/filter/'+filter);
  }


 public getProductsByMeal(mealId: string) {
  return this.http.get<Product[]>('http://localhost:4999/products/mealId/'+mealId);
}
 public getMyMeal(userId: string) {
  return this.http.get<Product[]>('http://localhost:4999/products/userId/'+userId);
}



  public getProduct(id:number){
    return this.http.get<Product>('http://localhost:4999/products/'+id);
  }

public addProduct(product:Product,  filesFile:any) {
  const postFile=new FormData();
 postFile.append('name', product.name!);
 postFile.append('part', product.part!);
 postFile.append('count', product.count!);
 postFile.append('meals_id', product.meals_id?.toString());


 postFile.append('file', filesFile);

   postFile.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });

  return this.http.post('http://localhost:4999/products/'+product.id, postFile);






}

 public updateProduct(product: Product, file: any) {
  const formData = new FormData();
  formData.append('name', product.name!);
  formData.append('part', product.part!);
  formData.append('count', product.count!);
  formData.append('meals_id', product.meals_id?.toString());

  if (file) {
    formData.append('file', file);
  }

    return this.http.put('http://localhost:4999/products/',formData);
  }


    public deleteProduct(id:number){
    return this.http.delete('http://localhost:4999/products/'+id);
  }


}




/*

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
public product:Product|null=null;


  constructor(private http:HttpClient) { 
    const product=localStorage.getItem("product");
    if (product!=null){
      this.product=JSON.parse(product);
      console.log(this.product);
    }
  }
  

  public getProducts(){
    return this.http.get<Product[]>('http://localhost:4999/products/');
  }
 
  
   public getFiltredProducts(filter:String){
    return this.http.get<Product[]>('http://localhost:4999/products/filter/'+filter);
  }



  public getProduct(id:number){
    return this.http.get<Product>('http://localhost:4999/products/'+id);
  }

public addProduct(product:Product,  filesFile:any) {
  const postFile=new FormData();
 postFile.append('name', product.name!);
 postFile.append('part', product.part!);
 postFile.append('count', product.count!);
 postFile.append('file', filesFile);
  return this.http.post('http://localhost:4999/products/'+product, postFile);






}

 public updateProduct(product:Product){
    return this.http.put('http://localhost:4999/products/',product);
  }


    public deleteProduct(id:number){
    return this.http.delete('http://localhost:4999/products/'+id);
  }


}
  */