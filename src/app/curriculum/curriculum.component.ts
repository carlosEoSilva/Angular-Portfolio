import { Component, OnInit } from '@angular/core';
import { LoadServiceService } from '../services/load-service.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {

  constructor(public loadService:LoadServiceService) { }

  ngOnInit(): void {
  }

}
