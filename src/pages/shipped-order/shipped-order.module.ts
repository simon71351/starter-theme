import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShippedOrderPage } from './shipped-order';

@NgModule({
  declarations: [
    ShippedOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(ShippedOrderPage),
  ],
})
export class ShippedOrderPageModule {}
