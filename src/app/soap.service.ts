import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Info } from './info';

@Injectable({
  providedIn: 'root'
})
export class SoapService {
  Products = [];
  baseUrl: string ="http://127.0.0.1:5000/infos/";

  constructor(private http : HttpClient) { }

//   public getInfos():Observable<Info[]>{ 
//     let s ="AL";
//     return this.http.get(this.baseUrl+s);
// }



//public Infos: Observable<Info[]> = of([]);
  
        loadProducts() {
          let s ="AL";
            debugger;
            return this.http.get(this.baseUrl+s);
            //return this.Infos;
        }


        getProducts(s:string): Observable<Info[]> {
          return this.http.get<Info[]>(this.baseUrl + '/'+s);
        }
        prenProducts(): Observable<string[]> {
          return this.http.get<string[]>(this.baseUrl + '/GA');
        }
    }

    

