import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { ProductListComponent } from './Components/product-list/product-list.component';

const routes: Routes = [
  {path: '', 
  component: ProductListComponent},
  {path: 'add-product/:id', component: AddProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
