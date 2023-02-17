import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageServiceService {

  constructor() { }

  private selectedLang:string= 'BR';

  setLang(lang:string){
    this.selectedLang= lang;
    console.log(this.selectedLang);
  }

  getLang(){
    console.log(this.selectedLang);
    return this.selectedLang; 
  }

}
