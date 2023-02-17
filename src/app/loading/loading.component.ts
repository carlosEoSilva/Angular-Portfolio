import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadServiceService } from '../services/load-service.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  public loadScreen:number= 0;

  constructor(private loadService:LoadServiceService, private router:Router) { }

  ngOnInit(): void {
    let destiny:string= this.loadService.getDestiny();
    
    this.loadScreen= Math.floor(Math.random() * 3);
    // this.loadScreen= 2;

    console.log("destiny: " + destiny);
    
    setTimeout(()=>{
      this.router.navigateByUrl(destiny);
    }, 3000);
  }

}
