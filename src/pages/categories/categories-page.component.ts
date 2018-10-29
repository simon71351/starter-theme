import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { CategoryCRUDPageComponent } from '../index';
import { AppService } from '../../services/app.service';
/**
 * Generated class for the Tab1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
import * as _ from 'lodash'

@Component({
  templateUrl: './categories-page.component.html'
})
export class CategoriesPageComponent {

    // public config: Config;
    public columns: any;
    public categories = [];
    public rawCategories: any;

    private itemsPerPage = 20;
    constructor(
      public navCtrl: NavController,
      private http: HttpClient,
      private appService: AppService) {
    }

    ionViewDidLoad(): void {
      this.appService.setModel('vendors/11/categories');
      this.appService.getByQueryString('items_per_page=0').subscribe(res => {
        // console.log(res);
        this.rawCategories = res['categories'];
        this.fetchCategories();
      })
    }

    public fetchCategories(infiniteScroll?) {
      for(let x=0; x<20; x++) {
        if(this.rawCategories.length > 0) {
          const category = this.rawCategories.shift();
          const parentcategory = _.find(this.rawCategories, function(pc) { return pc.category_id == category.parent_id; });
          category['parent_category'] = parentcategory? parentcategory.category: undefined;
          this.categories.push(category);
        } else {
          if(infiniteScroll) {
            infiniteScroll.enable(false);
          }
          break;
        }
      }
      if(infiniteScroll) {
        infiniteScroll.complete();
      }
    }

    public openCategory(category) {
      this.navCtrl.push(CategoryCRUDPageComponent, {
          'category': category
      });
    }

    public addCategory() {
      this.navCtrl.push(CategoryCRUDPageComponent, {});
    }

    public getStatus(status) {
      let result;
      switch(status) {
        case 'A': result = 'Active'; break;
        case 'D': result = 'Deleted'; break;
        case 'H': result = 'Hidden'; break;
        default: result = 'Active';
      }
      return result;
    }

    public getParent(categoryPath) {
      const categoryAry = categoryPath.split('/');
      if (categoryAry.length > 1) {
        categoryAry.pop();
        return categoryAry.pop() + ', ';
      } else {
        return '';
      }
    }

    public doInfinite(infiniteScroll) {
      const self = this;
      setTimeout(function() {
        self.fetchCategories(infiniteScroll);
      }, 500);
    }
}
