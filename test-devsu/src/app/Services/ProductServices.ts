import { Injectable } from '@angular/core';
import {environment } from '../../environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {ListProductResponse} from '../Interfases/ListProductResponse'
import {Product} from '../Interfases/Product'


  @Injectable()
  export class ProductServices {
  
   
    constructor(
      private httpClient: HttpClient){
  
    }
  
    private baseUrl = environment.baseUser;
    private apiListProducts=environment.listProducts;


    public get(url:string) {

      const headers = new HttpHeaders().append('authorId', environment.authorId.toString());

        return this.httpClient.get <ListProductResponse[]> (this.baseUrl + url,{ headers: headers});
    }
  
    
    public addProduct(url:string, data:Product) {

      const headers = new HttpHeaders().append('authorId', environment.authorId.toString());

      return this.httpClient.post <Product> (this.baseUrl + url,data,{ headers: headers});
    }
  
  
    public updateProduct(url:string, data:Product) {

      const headers = new HttpHeaders().append('authorId', environment.authorId.toString());

      return this.httpClient.put <Product> (this.baseUrl + url,data,{ headers: headers});
    }
  
  
  
   
  
  }
  