import { Component, ElementRef, OnInit,ViewChild  } from '@angular/core';
import {   environment } from '../../../environments/environment';
import {   ProductServices } from '../../Services/ProductServices'

@Component({
  selector: 'modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @ViewChild('myModal', {static: false}) modal!: ElementRef;
  text:string=""
  option:number=1;
  body:any;
  constructor(private _productService: ProductServices) {
    
  }

  ngOnInit() {
     
  }
  

  open(text:string,option:number,body:any) {
    this.text=text;
    this.option=option;
    this.body=body;
    this.modal.nativeElement.style.display = 'block';
  }

  close() {
    this.modal.nativeElement.style.display = 'none';
  }
  

  DeleteProduct(){
    this.close()

    if(this.option==2){
      this._productService.deleteProduct(environment.listProducts, this.body)
      .subscribe(
        (response: any) => {
          console.log(response); 
          if (response && response.error && response.error.text === 'Product successfully removed') {
            console.log('El producto se eliminó correctamente');
          } else {
            console.error('La respuesta del servidor no es lo que se esperaba:', response);
          }
        },
        (error: any) => {
          console.error(error); 
          if (error && error.error && error.error.text === 'Product successfully removed') {
            console.log('El producto se eliminó correctamente');
            this.open('El producto se eliminó correctamente',1,{});
          } else {
            console.error('La respuesta del servidor no es lo que se esperaba:', error);
          }
        }
  
      );
    }
    else{
      this.close();
    }
    
  }


}
