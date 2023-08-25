import { Component } from '@angular/core';
import { SoapService } from './soap.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {Subscription, Observable } from 'rxjs';
import { Info } from './info';
import { map } from 'rxjs';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  options = [
    {value:'GA', label:'Gabon'}, 
    {value:'AF', label:'AFGHANISTAN'}, 
    {value:'ZA', label:'AFRIQUE DU SUD'},
    {value:'AL', label:'ALBANIE'},
    {value:'DZ', label:'ALGÉRIE'},
    {value:'CI', label:'CÔTE D’IVOIRE'},
    {value:'DJ', label:'DJIBOUTI'},
    {value:'BR', label:'BRÉSIL'},
    {value:'MN', label:'MONGOLIE'},
    {value:'PK', label:'PAKISTAN'},
    {value:'EH', label:'SAHARA OCCIDENTAL'},
    {value:'TN', label:'TUNISIE'}

  ];
  //public anothervariableToHoldTheSelectedOption = null;
   c = "";
 // inf$ : Observable<string[]>;
  infos$? :Observable<Info[]>;
 // private productsObservable : Observable<any[]> ; 
  constructor(private http : HttpClient,private soap : SoapService){
    //this.inf$ = soap.prenProducts();
    //this.infos$ = soap.getProducts();
    
  }
  ngOnInit(){
  }

//   clik(){
//     this.soap.loadProducts().subscribe(
//     data => this.tabs = data,
//     error => console.error('There was an error!', error)
// )
    //alert(this.tabs.length);
    // this.soap.loadProducts().subscribe(
    //   data =>{
    //     console.log(data);
    //     this.tabs = data;
    //   }
    // )
  // }

  // getCandy(){
    
  //   this.http.get('http://127.0.0.1:5000/infos'+'/GA').subscribe(data=>{
  //   //this.infos = data;
  //   this.infos =data;
  //   console.log(data)
  //   })
  //   }
  //}

  onsubmit() {
    this.infos$ = this.soap.getProducts(this.c);
  }
 
}
