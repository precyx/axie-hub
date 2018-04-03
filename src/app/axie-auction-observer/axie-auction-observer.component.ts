import { Component, OnInit } from '@angular/core';
import {ContractService} from '../services/contract.service';
import {VersionService} from '../services/version.service';
import {NgZone} from '@angular/core';
declare var web3:any;
declare var Notification:any;

@Component({
  selector: 'app-axie-auction-observer',
  templateUrl: './axie-auction-observer.component.html',
  styleUrls: ['./axie-auction-observer.component.css']
})
export class AxieAuctionObserverComponent implements OnInit {

  createdAuctionEvents:Array<any> = [];
  allEvents:Array<any> = [];

  logcounter:number = 0;
  logcounter_auction_created:number = 0;

  constructor(
    private contractService:ContractService,
    private versionService:VersionService,
    private _ngZone:NgZone
  ){}

  ngOnInit() {
    var that = this;
    this.versionService.set("0.0.1","Axie Auction Observer", "axieAuctionObserver");
    //
    var clockAuctionAPI    = web3.eth.contract(this.contractService.axie_infinity_clock_auction).at(this.contractService.axie_infinity_clock_auction_address);
    var presaleExtendedAPI = web3.eth.contract(this.contractService.axie_infinity_presale_extended).at(this.contractService.axie_infinity_presale_extended_address);
    var redemptionAPI         = web3.eth.contract(this.contractService.axie_infinity_axie_redemption).at(this.contractService.axie_infinity_redemption_address);
    var coreAPI            = web3.eth.contract(this.contractService.axie_infinity_core).at(this.contractService.axie_infinity_core_address);
    //
    //
    console.log(clockAuctionAPI);
    //
    /*var auctionSuccessfulEvent = clockAuctionAPI["AuctionSuccessful"]({}, function(err,res){
      console.log("auction successful",err,res);
    });
    var auctionCreatedEvent = clockAuctionAPI["AuctionCreated"]({}, function(err,res){
      console.log("auction created",err,res);
    });
    var auctionCancelledEvent = clockAuctionAPI["AuctionCancelled"]({}, function(err,res){
      console.log("auction cancelled",err,res);
    });
    var ownershipTransferredEvent = clockAuctionAPI["OwnershipTransferred"]({}, function(err,res){
      console.log("ownership transferred",err,res);
    });*/
    /*var clockAuctionEvents = clockAuctionAPI.allEvents([], function(err,res){
      that.parseEvent.apply(that, [err,res,that]);
    });
    var presaleExtendedEvents = presaleExtendedAPI.allEvents([], function(err,res){
      that.parseEvent.apply(that, [err,res,that]);
    });
    var redemptionEvents = redemptionAPI.allEvents([], function(err,res){
      that.parseEvent.apply(that, [err,res,that]);
    });
    var coreEvents = coreAPI.allEvents([], function(err,res){
      that.parseEvent.apply(that, [err,res,that]);
    });*/

    var auctionSuccessfulEvent = clockAuctionAPI.AuctionSuccessful({}, function(err,res){
      console.log("auction successful",err,res);
      that.parseEvent.apply(that, [err,res,that]);
      //var a = new Notification("axxx", {icon:"assets/icons/axie_sold_notify.jpg"});
    });
    var auctionCreatedEvent = clockAuctionAPI.AuctionCreated({}, function(err,res){
      console.log("auction created",err,res);
      that.parseEvent.apply(that, [err,res,that]);
      //var a = new Notification("axxx", {icon:"assets/icons/new_axie_notify.jpg"});
    });
    var auctionCancelledEvent = clockAuctionAPI.AuctionCancelled({}, function(err,res){
      console.log("auction cancelled",err,res);
      that.parseEvent.apply(that, [err,res,that]);
      //var a = new Notification("axxx", {icon:"assets/icons/axie_delisted.jpg"});
    });


  }

  parseEvent(err:any,res:any,that:any){
    if(!err){
      var d = new Date(); // for now
      res.mytime = d.getHours().toString().padStart(2, "0") + ":" + d.getMinutes().toString().padStart(2, "0") + ":" + d.getSeconds().toString().padStart(2,"0");
      that.allEvents.unshift(res);
      that._ngZone.run(()=>{});
      //
      that.logcounter++;
      var _title = "";
      var _body = "";
      var _icon = "/assets/icons/";
      //
      _body += "#"+that.logcounter;
      if(res.event) {
        _body += " "+res.event;
        switch(res.event){
          case "OwnershipTransferred" : _icon += "accept_notify.jpg"; break;
          case "Transfer"             : _icon += "transfer_notify.jpg"; break;
          case "Approval"             : _icon += "accept_notify.jpg"; break;
          case "AuctionCreated"       : _icon += "new_axie_notify.jpg"; break;
          case "AuctionSuccessful"    : _icon += "axie_sold_notify.jpg"; break;
          case "AuctionCancelled"     : _icon += "axie_delisted.jpg"; break;
          default : _icon += "questionmark_notify.jpg";
        }
      }
      else {
        _body += " Unknown Event";
        _icon += "questionmark_notify.jpg";
      }
      if(res.args) if(res.args._tokenId) _title += "Axie #" + res.args._tokenId;
      else                               _title += res.address;
      that.notifyMe(_title, _body);
    }
    console.log("allevents", err,res);
  }



  notifyMe(_msg_title:string, _msg_body:string, _icon:string) {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      var notification = new Notification(_msg_title, {body:_msg_body, icon:_icon});
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
      Notification.requestPermission(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          var notification = new Notification(_msg_title, {body:_msg_body, icon:_icon});
        }
      });
    }
    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them any more.
  }

}
