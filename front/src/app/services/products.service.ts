import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient, private authService:AuthService) { }


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