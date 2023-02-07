import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    
  constructor(public loadService:LoadServiceService) { }

  ngOnInit(): void {}

}
