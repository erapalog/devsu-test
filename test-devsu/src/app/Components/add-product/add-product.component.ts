import { Component, OnInit,ViewChild } from '@angular/core';
import {FormBuilder,FormGroup,FormControl, Validators,AbstractControl } from '@angular/forms';
import {   environment } from '../../../environments/environment';
import { ActivatedRoute ,Router} from '@angular/router';
import {   ProductServices } from '../../Services/ProductServices'
import {   SharedService } from '../../Services/SharedService'
import {Product} from '../../Interfases/Product'
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @ViewChild('modal', {static: false}) modal!: ModalComponent;
   form: FormGroup;
   data:Product;
   id:any;

  constructor(private route: ActivatedRoute, 
              private formBuilder: FormBuilder,
              private _productService: ProductServices,
              private _sharedService:SharedService,
              private router: Router) { 

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
    this.id = this.route.snapshot.paramMap.get('id');
  }

  validateProduct(){

    let body = {
      id:  this.form.value.id,
      name: this.form.value.name,
      description: this.form.value.description,
      logo: this.form.value.logo,
      date_release: this.form.value.date_release,
      date_revision: this.form.value.date_revision

    }

    if (this.id==1) this.addProduct(body)
    else this.UpdateProduct(body)
    
      
    

  }

  addProduct(body:Product){
    
    this._productService.addProduct(environment.listProducts, body)
    .subscribe({
      next: (data: Product) => {
        this.modal.open("Agregado Correctamente",1,{});
      },
      error: (err: any) => { },
      complete: () => { }
    }

    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  UpdateProduct(body:Product){
    this._productService.updateProduct(environment.listProducts, body)
    .subscribe({
      next: (data: Product) => {
        this.modal.open("Actualizado Correctamente",1,{});
        
      },
      error: (err: any) => { },
      complete: () => { }
    }

    );
  }

  resetForm(): void {
    (this.id==1) ? this.form.reset() : this.router.navigateByUrl('/');
  }

}
