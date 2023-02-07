import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageServiceService } from '../language-service.service';
import { LoadServiceService } from '../services/load-service.service';

@Component({
  selector: 'app-menu-cards',
  templateUrl: './menu-cards.component.html',
  styleUrls: ['./menu-cards.component.css']
})
export class MenuCardsComponent implements OnInit {
  texts:any= '';
  
  enCurriculo= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  enCertificados= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  enProjetos= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";


  constructor(
    private serviceLang:LanguageServiceService, 
    private router:Router,
    private loadService:LoadServiceService) { }

  ngOnInit(): void {
    this.texts= this.serviceLang.getHomeLang();
  }

  // goToPage(route:string){
  //   this.loadService.setDestiny(route);
  //   this.router.navigateByUrl("/loading")
  // }

  goToPage(route:string){
    this.loadService.goToPage(route);
  }

  
}
