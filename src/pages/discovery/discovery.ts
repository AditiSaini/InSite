import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DiscoveryDetailPage } from '../discovery-detail/discovery-detail';
import {RoutePage} from '../route/route';

@Component({
  selector: 'page-discovery',
  templateUrl: 'discovery.html'
})

export class DiscoveryPage {

  constructor(public navCtrl: NavController) {
  }

  directToDetails() {
  	this.navCtrl.push(DiscoveryDetailPage);
  }
  directToRoute() {
  	this.navCtrl.push(RoutePage);
  }

}


