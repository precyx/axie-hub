import { Component, OnInit } from '@angular/core';
declare var web3:any;
declare var $:any;

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.css']
})
export class HeadbarComponent implements OnInit {

  currentAddress:string;

  constructor(
  ){}

  ngOnInit() {
  }

  toggleMenu(e):void{
    $(".menuicon").toggleClass("active");
  }

}
