import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageServiceService {

  constructor() { }

  // private selectedLang:string= '';
  private selectedLang:string= 'BR';

  public homeBr=
    {
      cardHeader1:'CURRÍCULO',
      cardHeader2:'CERTIFICADOS',
      cardHeader3:'PROJETOS',
      cardBody1:"Currículo pessoal onde falo um pouco sobre mim, minhas formações e experiências profissionais anteriores(como programador ou não)",
      cardBody2:"Formações acadêmicas que adquiri com o passar do tempo atravéz de cursos presenciais e a distância, alguns gratuitos outros pagos e uma faculdade.",
      cardBody3:"Projetos pessoais que desenvolvi como hobbi, atividades, exemplos ou simplesmente exercícios para praticar e expandir minhas habilidades em programação.",
      cardBtn1:"ANALISAR",
      cardBtn2:"VISUALIZAR",
      cardBtn3:"EXPERIMENTAR"
    };

    public homeEn=
    {
      cardHeader1:'CURRICULUM VITAE',
      cardHeader2:'CERTIFICATES',
      cardHeader3:'PROJECTS',
      cardBody1:"My personal apresentation where i talk about me, my academic formations and past working experiences, with programming or not :)",
      cardBody2:"My academic formations, courses that i participated in past years, some are presencial or online, free or paid courses and one college.",
      cardBody3:"Some projects developes as courses exercises, hobbies or justo to sharpen my skills as a developer.",
      cardBtn1:"ANALIZE",
      cardBtn2:"VISUALIZE",
      cardBtn3:"TRY"
    };


  setLang(lang:string){
    this.selectedLang= lang;
    console.log(this.selectedLang);
  }

  getHomeLang(){
    console.log(this.selectedLang);
    return this.selectedLang == "BR" ? this.homeBr : this.homeEn; 
  }

}
