import { ApartmentComponent } from './apartement/apartment/apartment.component';
import { FormApartmentComponent } from './apartement/form-apartment/form-apartment.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ResidenceComponent } from './residence/residence.component';
import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home', component:TestComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'product',component:ProductComponent},
  {path:'product/:id',component:DetailProductComponent},
  {path:'showApparts/:id',component: ApartmentComponent},
  {path:'residence',component:ResidenceComponent},
  {path:'addappart/:id',component:FormApartmentComponent},

  {path:'sign',component:ReactiveFormsComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
