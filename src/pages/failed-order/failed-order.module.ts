import { FailedOrderPage } from './failed-order';
import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    FailedOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(FailedOrderPage),
  ],
})
export class FailedOrderPageModule {}
