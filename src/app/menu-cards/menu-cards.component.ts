import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageServiceService } from '../services/language-service.service';
import { LoadServiceService } from '../services/load-service.service';

@Component({
  selector: 'app-menu-cards',
  templateUrl: './menu-cards.component.html',
  styleUrls: ['./menu-cards.component.css']
})
export class MenuCardsComponent implements OnInit {
  public texts:any;

  constructor(
    private serviceLang:LanguageServiceService, 
    private router:Router,
    private loadService:LoadServiceService) { }

  ngOnInit(): void {
    this.serviceLang.getLang() == "BR" ?
    this.texts= this.pt :
    this.texts= this.en;
  }

  en= {
      cardHeader1:'CURRICULUM VITAE',
      cardHeader2:'CERTIFICATES',
      cardHeader3:'PROJECTS',
      cardBody1:"My personal apresentation where i talk about me, my academic formations and past working experiences, with programming or not :)",
      cardBody2:"My academic formations, courses that i participated in past years, some are presencial or online, free or paid courses and one college.",
      cardBody3:"Some projects developes as courses exercises, hobbies or justo to sharpen my skills as a developer.",
      cardBtn1:"ANALIZE",
      cardBtn2:"VISUALIZE",
      cardBtn3:"TRY",
      btn1:"LANGUAGE"
  
  }

  pt= {
    cardHeader1:'CURRÍCULO',
    cardHeader2:'CERTIFICADOS',
    cardHeader3:'PROJETOS',
    cardBody1:"Currículo pessoal onde falo um pouco sobre mim, minhas formações e experiências profissionais anteriores(como programador ou não)",
    cardBody2:"Formações acadêmicas que adquiri com o passar do tempo atravéz de cursos presenciais e a distância, alguns gratuitos outros pagos e uma faculdade.",
    cardBody3:"Projetos pessoais que desenvolvi como hobbi, atividades, exemplos ou simplesmente exercícios para praticar e expandir minhas habilidades em programação.",
    cardBtn1:"ANALISAR",
    cardBtn2:"VISUALIZAR",
    cardBtn3:"EXPERIMENTAR",
    btn1:"IDIOMA"
  
  }

  goToPage(route:string){
    this.loadService.goToPage(route);
  }

  
}
