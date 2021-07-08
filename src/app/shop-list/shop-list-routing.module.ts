import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopListComponent } from './pages/shop-list/shop-list.component';
import { ShopListLayoutComponent } from './shared/shop-list-layout/shop-list-layout.component';

const routes: Routes = [
  {
    path:"",
    component:ShopListLayoutComponent,
    children:[
      {
        path:"",
        component:ShopListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopListRoutingModule { }
