import { CancelledOrderPage } from './cancelled-order';
import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    CancelledOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(CancelledOrderPage),
  ],
})
export class CancelledOrderPageModule {}
