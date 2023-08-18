import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseApiUrl: string ="https://localhost:7156";

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseApiUrl + '/api/products')
  }

  addProduct(newProduct: Product): Observable<Product>{
    newProduct.id='00000000-0000-0000-0000-000000000000';
    return this.http.post<Product>(this.baseApiUrl + "/api/products", newProduct);
  }
}