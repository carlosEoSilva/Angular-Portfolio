import { Component, OnInit } from '@angular/core';
import { LanguageServiceService } from '../services/language-service.service';
import { LoadServiceService } from '../services/load-service.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {
  language:string= "";
  curriculo:string= "";
  texts:any;

  br={
    btn1: "VOLTAR"
  }

  en={
    btn1: "GO BACK"
  }

  constructor(
    public loadService:LoadServiceService, 
    public languageService:LanguageServiceService) { }

  ngOnInit(): void {
    this.language= this.languageService.getLang();
    this.language == "BR" ? this.texts= this.br : this.texts= this.en;
  }
 

}
