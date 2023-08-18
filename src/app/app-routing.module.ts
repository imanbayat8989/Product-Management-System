import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { AppProductComponent } from './components/app-product/app-product.component';

const routes: Routes = [
  {path:'', component: ProductsComponent},
  {path:'products', component:ProductsComponent},
  {path:'products/add', component:AppProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
