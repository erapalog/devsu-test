import { Component, OnInit,ViewChild } from '@angular/core';
import {   ProductServices } from '../../Services/ProductServices'
import {   SharedService } from '../../Services/SharedService'
import {   environment } from '../../../environments/environment';
import {ListProductResponse} from '../../Interfases/ListProductResponse'
import { Router} from '@angular/router';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})


export class ProductListComponent implements OnInit {

  @ViewChild('modal', {static: false}) modal!: ModalComponent;

  constructor(private _productService: ProductServices,
              private router: Router,
              private _sharedService:SharedService) { }
  listProducts:ListProductResponse[]=[];
  term:string="";
  selectedOption: number = 5;
 

  ngOnInit(): void {

    this.Consultar();
  }

  Consultar() {

    this._productService.get(environment.listProducts)
      .subscribe({
        next:(data:ListProductResponse[]) => {
        this.listProducts=data;
        this.listProducts = this.listProducts.slice(0, this.selectedOption);
        },
        error: (err: any) => { },
        complete: () => { }
        }
          
      );
  }

  openModal(title:string,option:number,body:any) {
    this.modal.open(title,option,body);
  }

  addEditProduct(data:any){

    this._sharedService.setProductData(data);
    
    (Object.keys(data).length==0)
      ?this.router.navigateByUrl('/add-product/1')
      :this.router.navigateByUrl('/add-product/2')
  }

 
}
