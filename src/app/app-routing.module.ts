import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { AppProductComponent } from './components/app-product/app-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

const routes: Routes = [
  {path:'', component: ProductsComponent},
  {path:'products', component:ProductsComponent},
  {path:'products/add', component:AppProductComponent},
  {path:'products/edit/:id', component:EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
