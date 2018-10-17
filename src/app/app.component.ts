import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { CategoriesPageComponent, ProductsPageComponent } from '../pages';

import { HomePage } from "../pages/home/home";
import { Keyboard } from '@ionic-native/keyboard';
import { LocalWeatherPage } from "../pages/local-weather/local-weather";

import { LoginPage } from "../pages/login/login";
// import { Tab1Page } from "../pages/tab1/tab1";
// import { Tab2Page } from "../pages/tab2/tab2";
// import { TabsPage } from "../pages/tabs/tabs";
import { OrderPage } from '../pages/order/order';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  appMenuItems: Array<PageInterface>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard
  ) {
    this.initializeApp();

    this.appMenuItems = [
      {title: 'Home', name: 'HomePage',  component: HomePage, icon: 'home'},
      {title: 'Local Weather', name: 'LocalWeatherPage', component: LocalWeatherPage, icon: 'partly-sunny'},
      { title: 'Order', name: 'OrderPage', component: OrderPage, icon: 'partly-sunny'},
      { title: 'Products', name: 'Products Page', component: ProductsPageComponent, tabComponent: ProductsPageComponent, index: 0, icon: 'ios-american-football' }
      { title: 'Categories', name: 'Categories Page', component: CategoriesPageComponent, tabComponent: CategoriesPageComponent, index: 1, icon: 'ios-american-football' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      //*** Control Splash Screen
      // this.splashScreen.show();
      // this.splashScreen.hide();

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //*** Control Keyboard
      this.keyboard.disableScroll(true);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.nav.setRoot(LoginPage);
  }

}
