import { Component, OnInit } from '@angular/core';
import { LoadServiceService } from '../services/load-service.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {
  path="../../assets/certificates/";
  items=[
    this.path + "alura-1.png",
    this.path + "alura-2.png",
    this.path + "alura-3.png",
    this.path + "alura-4.png",
    this.path + "ccm-01.jpg",
    this.path + "ccm-02.jpg",
    this.path + "diploma-ads.png",
    this.path + "linux.jpg",
    this.path + "oci.jpg",
    this.path + "webDev.jpg",
  ];

  

  constructor(public loadService:LoadServiceService) { }

  ngOnInit(): void {
  }

}
