import { Component, OnInit } from '@angular/core';

import { Purchase } from 'src/app/shared/interface/purchase.interface';
import { ShopListService } from 'src/app/shared/services/shop-list.service';


@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
  shopList:Purchase[]  =  []
  sortSelected:keyof Purchase = "name"
  showAddingRow = false
  addingInputs = {
    name:"",
    quantity:1
  }
  constructor(private listService:ShopListService) { }
  async getShopList(){
    try{
        this.shopList = await this.listService.getPurchases()
    }catch(error){
      console.log(error)
    }finally{
      console.log(this.shopList);
    }
  }
  sortBy(array:Purchase[], prop: keyof Purchase) {
    return array.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }
  getBougth() {
    return this.shopList.filter((a) => {return a.bought});
  }
  getNotBougth() {
    return this.shopList.filter((a) => {return!a.bought});
  }
  startAdding(){
    this.showAddingRow = true
  }
  async deleteRow(id:number){
    try{
      await this.listService.deletePurchase(id)
    }catch(error){
      console.log(error);
      
    }finally{
      this.getShopList()
    }
  }
  async bougthEdited(purchase:Purchase){
    try{
      purchase.bought = !purchase.bought 
      let res = await this.listService.editPurchase(purchase)
    }catch(error){
      console.log(error);
    }finally{
      console.log("Edited");
      
    }
  }
  async endAdding(result:boolean){
    this.showAddingRow = false
    if(result){
      let newPurchase:any = {
        name:this.addingInputs.name,
        quantity:this.addingInputs.quantity,
        bought:false
      }
      await this.listService.postPurchase(newPurchase)
      this.getShopList()
    }else{
    }
      this.addingInputs.name = ""
      this.addingInputs.quantity = 1
  }
  ngOnInit(): void {
    this.getShopList()
    
    
  }

}
