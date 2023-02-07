import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageServiceService } from '../language-service.service';
import { LoadServiceService } from '../services/load-service.service';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit {
  constructor(
    private router:Router, 
    private serviceLang:LanguageServiceService, 
    ) { }

  ngOnInit(): void { }

  setLangBr(){
    this.serviceLang.setLang('BR');
    this.router.navigateByUrl("/home");
  }

  setLangUs(){
    this.serviceLang.setLang('US');
    this.router.navigateByUrl("/home");
  }

}
