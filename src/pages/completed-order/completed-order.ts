import { Headers, Http } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Component } from '@angular/core';

/**
 * Generated class for the CompletedOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-completed-order',
  templateUrl: 'completed-order.html',
})
export class CompletedOrderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompletedOrderPage');
  }

  ngOnInit(): void {
    // This code works but we need to make it angular way
    // var data = new FormData();
    // data.append("email", "hanwinster@gmail.com");

    // var xhr = new XMLHttpRequest();
    // xhr.withCredentials = true;

    // xhr.addEventListener("readystatechange", function () {
    //   if (this.readyState === 4) {
    //     console.log(this.responseText);
    //   }
    // });

    // xhr.open("GET", "http://www.yesss.com.mm/api.php?_d=products");
    // xhr.setRequestHeader("authorization", "Basic aGFud2luc3RlckBnbWFpbC5jb206M2VnWTRoUzcwODlPMVY4Nm5hZDM3MjRLNG0xQjA0TDU=");
    // xhr.setRequestHeader("cache-control", "no-cache");
    // // xhr.setRequestHeader("postman-token", "f7e12a02-30a8-6510-226d-7f1a35b88a7e");

    // xhr.send(data);

    let url = "http://www.yesss.com.mm/api.php?_d=orders";
    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    // this will get a list of order
    this.http.get(url, { headers }).subscribe(result => {
      console.log('result');
      console.log(JSON.parse(result['_body']));

      let products = JSON.parse(result['_body'])['orders'];
      // Loop through the result and Get Order Details
      // Then request Product Details and show image in App
      // Total 2 more steps

      products.forEach(product_obj => {
        console.log('order_id');
        console.log(product_obj['order_id']);

        // Get Order Details in here
        this.http.get(`http://www.yesss.com.mm/api.php?_d=orders/${product_obj['order_id']}`, { headers }).subscribe(result1 => {
          console.log('Order Details');
          console.log(JSON.parse(result1['_body']));

          let productsInfoInOrder = JSON.parse(result1['_body'])['product_groups'];

          productsInfoInOrder.forEach(productsInfoInOrderObj => {
            for (let key in productsInfoInOrderObj.products) {
              // productsInfoInOrderObj.products[key]['main_pair']['detailed']['http_image_path'];
              
              if (productsInfoInOrderObj.products[key]['main_pair']['detailed']['http_image_path'].indexOf('http://www.yesss.com.mm') >= 0) {
                console.log('imagePath ********');
                console.log(productsInfoInOrderObj.products[key]['main_pair']['detailed']['http_image_path']);
              }
            }
            
          });

        });
      });
    })
  }

  public createAuthorizationHeader(headers: Headers) {
    headers.append("authorization", "Basic aGFud2luc3RlckBnbWFpbC5jb206M2VnWTRoUzcwODlPMVY4Nm5hZDM3MjRLNG0xQjA0TDU=");
    headers.append("cache-control", "no-cache");
  }

}
