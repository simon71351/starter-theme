import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Component } from '@angular/core';

/**
 * Generated class for the CompletedOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-failed-order',
  templateUrl: 'failed-order.html',
})
export class FailedOrderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompletedOrderPage');
  }

}
