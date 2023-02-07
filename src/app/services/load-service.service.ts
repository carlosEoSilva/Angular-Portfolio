import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoadServiceService {
  private showLoading:boolean= false;
  private destiny:string|any;

  constructor(private router:Router) { }

  setShowLoading(loading:boolean){
    this.showLoading = loading;
  }

  getShowLoading(){
    return this.showLoading;
  }

  setDestiny(destiny:string){
    console.log("setDestiny: " + this.destiny);
    this.destiny= destiny;
  }

  getDestiny(){
    console.log("getDestiny: " + this.destiny);
    return this.destiny;
  }

  goToPage(route:string){
    this.setDestiny(route);
    this.router.navigateByUrl("/loading")
  }
  

}

