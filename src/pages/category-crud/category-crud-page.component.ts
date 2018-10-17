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
  templateUrl: './category-crud-page.component.html'
})
export class CategoryCRUDPageComponent {

    public config: Config;
    public category;
    constructor(public navCtrl: NavController,
      private http: HttpClient,
      public navParams: NavParams,
      private appService: AppService) {
      if(this.navParams && this.navParams.get('category')) {
        this.category = this.navParams.get('category');
      } else {
        this.category = {
          'category': '',
          'status': 'A',
          'id_path': '100',
          'count': '100',
          'company_id': '9'
        };
      }
    }

    ionViewDidLoad(): void {
    }

    public saveCategory() {
      // console.log(this.product);
      // this.navCtrl.pop();

      const data = JSON.stringify(this.category);
      // this.http.post('http://www.yesss.com.mm/api.php?_d=products', data, httpOptions).subscribe(res => {
      //   console.log(res);
      //   this.product.product_id = 5771;
      // })
      this.appService.setModel('categories');
      if(this.category.category_id) {
        this.appService.edit(this.category.category_id, data).subscribe(res => {
          console.log(res);
        });
      } else {
        this.appService.create(data).subscribe(res => {
          console.log(res);
        });
      }
    }

    public deleteCategory() {
      this.appService.setModel('categories');
      if(this.category.category_id) {
        this.appService.delete(this.category.category_id).subscribe(res => {
          console.log(res);
        });
      }
    }
}
