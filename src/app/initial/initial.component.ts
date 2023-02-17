import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageServiceService } from '../services/language-service.service';
import { LoadServiceService } from '../services/load-service.service';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit {
  constructor(
    private loadService:LoadServiceService, 
    private serviceLang:LanguageServiceService, 
    ) { }

  ngOnInit(): void { }

  setLang(lang:string){
    this.serviceLang.setLang(lang);
    this.loadService.goToPage("/home");
  }

}
