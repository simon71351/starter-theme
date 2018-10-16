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
    constructor(
      public navCtrl: NavController,
      private http: HttpClient,
      private appService: AppService) {
    }

    ionViewDidLoad(): void {
      this.fetchProducts();
    }

    public fetchProducts() {
      this.appService.setQueryString('products');
      this.appService.getAll().subscribe(res => {
        this.products = res['products'];
        console.log(res);
      })
      // const httpOptions = {
      //   headers: new HttpHeaders({
      //     'Content-Type':  'application/json',
      //     'Authorization': 'Basic ' + 'aGFud2luc3RlckBnbWFpbC5jb206M2VnWTRoUzcwODlPMVY4Nm5hZDM3MjRLNG0xQjA0TDU='
      //   })
      // };

      // this.http.get('http://www.yesss.com.mm/api.php?_d=products', httpOptions).subscribe(res => {
      //   this.products = res['products'];
      // })
    }

    public openProduct(product) {
      this.navCtrl.push(ProductCRUDPageComponent, {
          'product': product
      });
    }

    public addProduct() {
      this.navCtrl.push(ProductCRUDPageComponent, {});
    }
}
