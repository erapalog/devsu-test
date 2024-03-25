import { Injectable } from '@angular/core';
import {environment } from '../../environments/environment';
import { HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import {ListProductResponse} from '../Interfases/ListProductResponse'
import {Product} from '../Interfases/Product'


  @Injectable()
  export class ProductServices {
  
   
    constructor(
      private httpClient: HttpClient){
  
    }
  
    private baseUrl = environment.baseUser;
    private headers = new HttpHeaders().append('authorId', environment.authorId.toString());


    public get(url:string) {
        return this.httpClient.get <ListProductResponse[]> (this.baseUrl + url,{ headers: this.headers});
    }
  
    
    public addProduct(url:string, data:Product) {
      return this.httpClient.post <Product> (this.baseUrl + url,data,{ headers: this.headers});
    }
  
  
    public updateProduct(url:string, data:Product) {
      return this.httpClient.put <Product> (this.baseUrl + url,data,{ headers: this.headers});
    }

    public deleteProduct(url:string, data:Product) {
      const params = new HttpParams().set('id', data.id);   
      const options = { params: params, headers: this.headers };

      return this.httpClient.delete <any> (this.baseUrl + url, options);
    }
  
  
  
   
  
  }
  