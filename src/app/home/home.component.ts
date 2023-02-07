import { Component, Input, OnInit } from '@angular/core';
import { LoadServiceService } from '../services/load-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showLoading:boolean= false;

  constructor() { }

  ngOnInit(): void { }

  

}
