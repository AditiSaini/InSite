import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  map: GoogleMap;

  public shopList:Array<any>;
  public loadedShopList:Array<any>;

  constructor(public navCtrl: NavController, public platform: Platform) {
    // platform.ready().then(() => {
    //     this.loadMap();
    // });

    this.shopList = []
    this.loadedShopList = [
      {
        name: 'Under Armour',
        unit: '#01-324A',
        category: 'sports'
      },
      {
        name: 'Nike',
        unit: '#03-214',
        category: 'sports'
      },
      {
        name: 'Adidas',
        unit: '#02-820B',
        category: 'sports'
      },
      {
        name: 'H&M',
        unit: '#03-120',
        category: 'fashion'
      },
      {
        name: 'Uniqlo',
        unit: '#01-425',
        category: 'fashion'
      },
      {
        name: 'ZARA',
        unit: '#02-87V',
        category: 'fashion'
      },
      {
        name: 'ArtBox',
        unit: '#01-122',
        category: 'stationery'
      },
    ];

  }

  initializeItems(): void {
    this.shopList = this.loadedShopList;
  }

  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();
    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;
    // if the value is an empty string don't filter the items
    if (!q) {
      this.shopList = [];
      return;
    }

    this.shopList = this.shopList.filter((v) => {
      if(v.name && q) {
        if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        else if (v.category.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
    console.log(q, this.shopList.length);
  }

  // loadMap (){
  //
  //     let location = new GoogleMapsLatLng(-34.9290,138.6010);
  //
  //     this.map = new GoogleMap('map', {
  //       'backgroundColor': 'white',
  //       'controls': {
  //         'compass': true,
  //         'myLocationButton': true,
  //         'indoorPicker': true,
  //         'zoom': true
  //       },
  //       'gestures': {
  //         'scroll': true,
  //         'tilt': true,
  //         'rotate': true,
  //         'zoom': true
  //       },
  //       'camera': {
  //         'latLng': location,
  //         'tilt': 30,
  //         'zoom': 15,
  //         'bearing': 50
  //       }
  //     });
  //
  //     this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
  //         console.log('Map is ready!');
  //     });
  //
  // }

}
