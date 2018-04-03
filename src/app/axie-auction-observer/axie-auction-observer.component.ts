import { Component, OnInit } from '@angular/core';
import {ContractService} from '../services/contract.service';
import {VersionService} from '../services/version.service';
declare var web3:any;

@Component({
  selector: 'app-axie-auction-observer',
  templateUrl: './axie-auction-observer.component.html',
  styleUrls: ['./axie-auction-observer.component.css']
})
export class AxieAuctionObserverComponent implements OnInit {

  auctions:Array<any> = [];

  constructor(
    private contractService:ContractService,
    private versionService:VersionService
  ){}

  ngOnInit() {

  }

}
