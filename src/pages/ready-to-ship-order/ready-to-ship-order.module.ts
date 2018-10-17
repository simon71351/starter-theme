import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReadyToShipOrderPage } from './ready-to-ship-order';

@NgModule({
  declarations: [
    ReadyToShipOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(ReadyToShipOrderPage),
  ],
})
export class ReadyToShipOrderPageModule {}
