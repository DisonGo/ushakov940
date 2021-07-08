import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Purchase } from '../interface/purchase.interface';

@Injectable({
  providedIn: 'root'
})
export class ShopListService {

  constructor(private http: HttpClient) {}
  PurchaseRoute = "http://localhost:3000/purchases/"
  getPurchases(): Promise<Purchase[]>{
    return this.http.get<Purchase[]>(this.PurchaseRoute).toPromise()
  }
  getPurchase(id:number): Promise<Purchase>{
    return this.http.get<Purchase>(this.PurchaseRoute+id).toPromise()
  }
  postPurchase(data:Purchase): Promise<Purchase>{
    return this.http.post<Purchase>(this.PurchaseRoute,data).toPromise()
  }

  deletePurchase(id:number): Promise<Purchase>{
    return this.http.delete<Purchase>(this.PurchaseRoute+id).toPromise()
  }

  editPurchase(data:Purchase): Promise<Purchase>{
    return this.http.patch<Purchase>(this.PurchaseRoute+data.id,data).toPromise()
  }
}
