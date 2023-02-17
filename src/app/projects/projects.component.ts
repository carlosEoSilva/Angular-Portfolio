import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageServiceService } from '../services/language-service.service';
import { LoadServiceService } from '../services/load-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  links={
    jogoMemoria: "https://carloseosilva.github.io/jogo-da-memoria/",
    acerteTopeira: "https://carloseosilva.github.io/whack-a-mole/",
    tiroAlvo: "https://carloseosilva.github.io/tiro-ao-alvo/",
    criptografia: "https://carloseosilva.github.io/criptografia/",
    calcularImc: "https://carloseosilva.github.io/calculadoraIMC/",
    jsBank: "https://carloseosilva.github.io/js-bank/",
    forca: "https://carloseosilva.github.io/jogo-da-forca/",
    catalogoHerois: "https://carloseosilva.github.io/hero-catalog/",
    voltar: ""
  }
    
  constructor(public loadService:LoadServiceService, 
    public serviceLang:LanguageServiceService) { }

    public texts:any;

    en= {
      proj1:'MEMORY GAME',
      proj2:'WHACK A MOLE',
      proj3:'SHOOTING RANGE',
      proj4:"CRIPTOGRAPHY",
      proj5:"IMC CALCULATOR",
      proj6:"JS-BANK",
      proj7:"SECRET WORD",
      proj8:"HERO CATALOG",
      proj9:"UNDER DEVELOPMENT",
      btn1: "ACCESS",
      btn2: "BACK"
  
  }

  pt= {
      proj1:'JOGO DA MEMÓRIA',
      proj2:'ACERTE A TOPEIRA',
      proj3:'TIRO AO ALVO',
      proj4:"CRIPTOGRAFIA",
      proj5:"CALCULADORA DE IMC",
      proj6:"JS-BANK",
      proj7:"JOGO DA FORCA",
      proj8:"CATALOGO DE HERÓIS",
      proj9:"EM DESENVOLVIMENTO",
      btn1: "ACCESSAR",
      btn2: "VOLTAR"
  
  }

    ngOnInit(): void {
      this.serviceLang.getLang() == "BR" ?
      this.texts= this.pt :
      this.texts= this.en;
    }

}
