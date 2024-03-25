import { Injectable } from '@angular/core';
import {Product} from '../Interfases/Product'
@Injectable()
export class SharedService{
    productData:Product;
    constructor(){
      
        this.productData= {
        date_release:  new Date(),
        date_revision: new Date(),
        description:"",
        id:"",
        logo:"",
        name:"",
      };
      
    }
    setProductData(val: Product){
      this.productData= val;
    }
    getProductData(){
      return this.productData;
    }
}