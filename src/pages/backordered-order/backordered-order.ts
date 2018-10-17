import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Component } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-backordered-order',
  templateUrl: 'backordered-order.html',
})
export class BackorderedOrderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompletedOrderPage');
  }

}
