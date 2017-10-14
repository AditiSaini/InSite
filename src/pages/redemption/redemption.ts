import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedemptionDetailPage } from '../redemption-detail/redemption-detail';
@Component({
  selector: 'page-redemption',
  templateUrl: 'redemption.html'
})

export class RedemptionPage {

  constructor(public navCtrl: NavController) {
  }

  directToDetails() {
  	this.navCtrl.push(RedemptionDetailPage);
  }
}


