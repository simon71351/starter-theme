import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { ProductCRUDPageComponent } from '../index';
import { AppService } from '../../services/app.service';
/**
 * Generated class for the Tab1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

// export interface Config {
//   products: string;
// }

@Component({
  templateUrl: './products-page.component.html'
})
export class ProductsPageComponent {

    // public config: Config;
    public columns: any;
    public products: any;
    private currentPage = 1;
    private itemsPerPage = 20;
    constructor(
      public navCtrl: NavController,
      private http: HttpClient,
      private appService: AppService) {
    }

    ionViewDidLoad(): void {
      this.fetchProducts();
    }

    public fetchProducts() {
      this.appService.setModel('vendors/11/products');
      this.appService.getByQueryString('page=' + this.currentPage + '&items_per_page=' + this.itemsPerPage).subscribe(res => {
        // console.log(res);
        this.products = res['products'];
      })
    }

    public openProduct(product) {
      this.navCtrl.push(ProductCRUDPageComponent, {
          'product': product
      });
    }

    public addProduct() {
      this.navCtrl.push(ProductCRUDPageComponent, {});
    }

    public doInfinite(infiniteScroll) {
        this.currentPage++;

        this.appService.setModel('vendors/11/products');
        this.appService.getByQueryString('page=' + this.currentPage + '&items_per_page=' + this.itemsPerPage).subscribe(res => {
          // console.log(res);
          this.products = this.products.concat(res['products']);
          infiniteScroll.complete();
          if(res['products'].length == 0) {
            infiniteScroll.enable(false);
          }
        })
    }
}
