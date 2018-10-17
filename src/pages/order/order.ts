import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { SuperTabs } from 'ionic2-super-tabs';

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  pages = [
    { pageName: 'CompletedOrderPage', title: 'Completed Order', icon: 'flame', id: 'completedOrderTab' },
    { pageName: 'ProcessedOrderPage', title: 'Processed Order', icon: 'flame', id: 'processedOrderTab' },
    { pageName: 'OpenOrderPage', title: 'Open Order', icon: 'flame', id: 'openOrderTab' },
    { pageName: 'FailedOrderPage', title: 'Failed Order', icon: 'flame', id: 'failedOrderTab' },
    { pageName: 'DeclinedOrderPage', title: 'Declined Order', icon: 'flame', id: 'declinedOrderTab' },
    { pageName: 'BackorderedOrderPage', title: 'Backordered Order', icon: 'flame', id: 'backorderedOrderTab' },
    { pageName: 'CancelledOrderPage', title: 'Cancelled Order', icon: 'flame', id: 'cancelledOrderTab' },
    { pageName: 'AwaitingcallOrderPage', title: 'Awaitingcall Order', icon: 'flame', id: 'awaitingcallOrderTab' }
  ];

  selectedTab = 0;

  @ViewChild(SuperTabs) superTabs: SuperTabs;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

  onTabSelect(ev: any) {
    // if (ev.index === 3) {
    //   let alert = this.alertCtrl.create({
    //     title: 'Select Page',
    //     message: 'Are you sure you want to access that page ?',
    //     buttons: [
    //       {
    //         text: 'No',
    //         handler: () => {
    //           this.superTabs.slideTo(this.selectedTab);
    //         }
    //       },
    //       {
    //         text: 'Yes',
    //         handler: () => {
    //           this.selectedTab = ev.index;
    //         }
    //       }
    //     ]
    //   });
    //   alert.present();
    // } else {
      this.selectedTab = ev.index;
      this.superTabs.clearBadge(this.pages[ev.index].id);
    // }
  }

}
