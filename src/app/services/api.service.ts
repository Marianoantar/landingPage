import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient);
  private urlBase:string = 'https://fakestoreapi.com/products';

  constructor() { }


  getProducts():Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this.urlBase);
  }

  getProduct(id:string):Observable<IProduct>{
    return this._http.get<IProduct>(this.urlBase + '/' + id);
    // return this._http.get(´${this.urlBase}/ ${id}´); es lo mismo que linea de arriba
  }
  
}
