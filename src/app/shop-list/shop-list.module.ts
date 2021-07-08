import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopListRoutingModule } from './shop-list-routing.module';


import { ShopListLayoutComponent } from './shared/shop-list-layout/shop-list-layout.component';
import { ShopListComponent } from './pages/shop-list/shop-list.component';
import { AddPurchaseComponent } from './components/add-purchase/add-purchase.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShopListLayoutComponent,
    ShopListComponent,
    AddPurchaseComponent,
  ],
  imports: [
    CommonModule,
    ShopListRoutingModule,
    FormsModule
  ]
})
export class ShopListModule { }
