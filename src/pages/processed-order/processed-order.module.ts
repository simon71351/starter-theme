import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { ProcessedOrderPage } from './processed-order';

@NgModule({
  declarations: [
    ProcessedOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(ProcessedOrderPage),
  ],
})
export class ProcessedOrderPageModule {}
