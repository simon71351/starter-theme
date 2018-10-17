import { DeclinedOrderPage } from './declined-order';
import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    DeclinedOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(DeclinedOrderPage),
  ],
})
export class DeclinedOrderPageModule {}
