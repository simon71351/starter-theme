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

@Component({
  templateUrl: './category-crud-page.component.html'
})
export class CategoryCRUDPageComponent {

    public category;
    public allCategories;
    constructor(public navCtrl: NavController,
      private http: HttpClient,
      public navParams: NavParams,
      private appService: AppService) {
      this.category = {
        'category': '',
        'status': 'A',
        'parent_id': '0',
        'count': '100',
        'company_id': '9'
      };

      this.appService.setModel('vendors/11/categories');
      this.appService.getByQueryString('items_per_page=0').subscribe(res => {
        this.allCategories = res['categories'];

        if(this.navParams && this.navParams.get('category')) {
          this.category = this.navParams.get('category');
        }
      })
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
      console.log('Here');
      this.appService.setModel('categories');
      if(this.category.category_id) {
        this.appService.delete(this.category.category_id).subscribe(res => {
          console.log(res);
        });
      }
    }

    // public compareCat(c1, c2): boolean {
    //   // console.log(c1);
    //   // console.log(c2);
    //   return c1.category_id === c2;
    // }
}
