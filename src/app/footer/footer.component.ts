import { Component, OnInit } from '@angular/core';

declare var web3:any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  web3jsversion:string;

  constructor() {}

  ngOnInit() {
    this.web3jsversion = web3.version.api; 
  }

}
