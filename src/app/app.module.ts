import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DiscoveryPage } from '../pages/discovery/discovery';
import { DiscoveryDetailPage } from '../pages/discovery-detail/discovery-detail';
import { RoutePage } from '../pages/route/route';
import { RedemptionPage } from '../pages/redemption/redemption';
import {RedemptionDetailPage} from '../pages/redemption-detail/redemption-detail';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DiscoveryPage,
    DiscoveryDetailPage,
    RoutePage,
    RedemptionPage,
    RedemptionDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DiscoveryPage,
    DiscoveryDetailPage,
    RoutePage,
    RedemptionPage,
    RedemptionDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
