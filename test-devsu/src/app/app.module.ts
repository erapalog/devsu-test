import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';

import {  ProductServices } from './Services/ProductServices'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {SharedService} from './Services/SharedService';
import { ModalComponent } from './Components/modal/modal.component'
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
    
  ],
  providers: [ProductServices,SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
