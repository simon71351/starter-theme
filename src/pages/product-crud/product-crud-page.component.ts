import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

// import { ProductsPageComponent } from '../index';

import { SuperTabsModule } from 'ionic2-super-tabs';
import { AppService } from '../../services/app.service';

/**
 * Generated class for the Tab1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

export interface Config {
  products: string;
}

@Component({
  templateUrl: './product-crud-page.component.html'
})
export class ProductCRUDPageComponent {

    public config: Config;
    public product;
    constructor(public navCtrl: NavController,
      private http: HttpClient,
      public navParams: NavParams,
      private appService: AppService) {
      if(this.navParams && this.navParams.get('product')) {
        this.product = this.navParams.get('product');
      } else {
        this.product = {
          'product': 'Test',
          'product-code': '',
          'price': '100',
          'base_price': '100',
          'list_price': '100',
          'category_ids': [309],
          'main_category': 309,
          'company_id': '9'
        };
      }
      console.log(this.product);
    }

    ionViewDidLoad(): void {
    }

    public saveProduct() {
      // console.log(this.product);
      // this.navCtrl.pop();

      const data = JSON.stringify(this.product);
      // this.http.post('http://www.yesss.com.mm/api.php?_d=products', data, httpOptions).subscribe(res => {
      //   console.log(res);
      //   this.product.product_id = 5771;
      // })
      this.appService.setModel('products');
      if(this.product.product_id) {
        this.appService.edit(this.product.product_id, data).subscribe(res => {
          console.log(res);
        });
      } else {
        this.appService.create(data).subscribe(res => {
          console.log(res);
        });
      }
    }

    public deleteProduct() {
      this.appService.setModel('products');
      if(this.product.product_id) {
        this.appService.delete(this.product.product_id).subscribe(res => {
          console.log(res);
        });
      }
    }

    public cancel() {
      this.navCtrl.pop();
    }
}
