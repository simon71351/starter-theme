import { CategoriesPageComponent, CategoryCRUDPageComponent, ProductCRUDPageComponent, ProductsPageComponent } from '../pages';
import {IonicApp, IonicModule} from "ionic-angular";

import {ActivityService} from "../services/activity-service";
import {AppService} from "../services/app.service";
import { AwaitingcallOrderPage } from '../pages/awaitingcall-order/awaitingcall-order';
import { BackorderedOrderPage } from '../pages/backordered-order/backordered-order';
import {BrowserModule} from '@angular/platform-browser';
import { CancelledOrderPage } from '../pages/cancelled-order/cancelled-order';
import {CheckoutTripPage} from "../pages/checkout-trip/checkout-trip";
import { DeclinedOrderPage } from '../pages/declined-order/declined-order';
import { FailedOrderPage } from '../pages/failed-order/failed-order';
import {HomePage} from "../pages/home/home";
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from "@angular/http";
import {IonicStorageModule} from '@ionic/storage';
import {Keyboard} from '@ionic-native/keyboard';
import {LocalWeatherPage} from "../pages/local-weather/local-weather";
import {LoginPage} from "../pages/login/login";
import {MyApp} from "./app.component";
import {NgModule} from "@angular/core";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {NotificationsPage} from "../pages/notifications/notifications";
import { OpenOrderPage } from '../pages/open-order/open-order';
import { OrderDetailPage } from '../pages/order-detail/order-detail';
import { OrderPage } from '../pages/order/order';
import {RegisterPage} from "../pages/register/register";
import {SearchLocationPage} from "../pages/search-location/search-location";
import {SettingsPage} from "../pages/settings/settings";
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { Tab1Page } from "../pages/tab1/tab1";
import { Tab2Page } from "../pages/tab2/tab2";
import { TabsPage } from "../pages/tabs/tabs";
import {TripDetailPage} from "../pages/trip-detail/trip-detail";
import {TripService} from "../services/trip-service";
import {TripsPage} from "../pages/trips/trips";
import {WeatherProvider} from "../services/weather";

// import services
// end import services
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripsPage,
    TabsPage,
    Tab1Page,
    Tab2Page,
    ProductsPageComponent,
    ProductCRUDPageComponent,
    CategoriesPageComponent,
    CategoryCRUDPageComponent,
    OrderPage,
    OrderDetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxDatatableModule,
    SuperTabsModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: '__ionic3_start_theme',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    SuperTabsModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OrderPage,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripsPage,
    TabsPage,
    Tab1Page,
    Tab2Page,
    ProductsPageComponent,
    ProductCRUDPageComponent,
    CategoriesPageComponent,
    CategoryCRUDPageComponent,
    OrderDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    ActivityService,
    TripService,
    WeatherProvider,
    AppService
  ]
})

export class AppModule {
}
