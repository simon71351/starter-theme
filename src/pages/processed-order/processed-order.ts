import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Component } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-processed-order',
  templateUrl: 'processed-order.html',
})
export class ProcessedOrderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompletedOrderPage');
  }

}
