import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Component } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-open-order',
  templateUrl: 'open-order.html',
})
export class OpenOrderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompletedOrderPage');
  }

}
