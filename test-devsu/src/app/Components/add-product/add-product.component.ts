import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl, Validators } from '@angular/forms';
import {   environment } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import {   ProductServices } from '../../Services/ProductServices'
import {   SharedService } from '../../Services/SharedService'
import {Product} from '../../Interfases/Product'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
   form: FormGroup;
   data:Product;

  constructor(private route: ActivatedRoute, 
              private formBuilder: FormBuilder,
              private _productService: ProductServices,
              private _sharedService:SharedService) { 

    this.data=this._sharedService.getProductData()

    this.form = this.formBuilder.group({

      'id': new FormControl(this.data.id, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ]),
      'name': new FormControl(this.data.name, [
        Validators.required,
        Validators.maxLength(100),
        Validators.minLength(5)
      ]),

      'description': new FormControl(this.data.description, [
        Validators.required,
        Validators.maxLength(200),
        Validators.minLength(10)
      ]),
      'logo': new FormControl(this.data.logo, [
        Validators.required
      ]),
    'date_release':new FormControl(this.data.date_release, [
      Validators.required
    ]),
    'date_revision':new FormControl(this.data.date_revision, [
      Validators.required
    ]),

    })
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
  }

  addProduct(){

    let body = {
      id: this.form.value.id,
      name: this.form.value.name,
      description: this.form.value.description,
      logo: this.form.value.logo,
      date_release: this.form.value.date_release,
      date_revision: this.form.value.date_revision

    }

    console.log(body)

      this._productService.addProduct(environment.listProducts,body)
        .subscribe({
          next:(data:Product) => {
            console.log(data)
          //this.listProducts=data;
          //.listProducts = this.listProducts.slice(0, this.selectedOption);
          },
          error: (err: any) => { },
          complete: () => { }
          }
            
        );
    
  }

}
