import { Component } from '@angular/core';//Injectable
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import { HttpClient } from '@angular/common/http';
import {SqliteProvider} from '../../providers/sqlite/sqlite';

//import * as data from "../../assets/data/fridge.json";

/**
 * Generated class for the FrigoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-frigo',
  templateUrl: 'frigo.html',
})

export class FrigoPage {
  public ingredients: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private sqliteService: SqliteProvider) {
    this.sqliteService.getAllIngredients().then(ings =>{
    this.ingredients = ings;
    console.log("select");
    console.log(ings);
    });
  }

  ionViewDidLoad() {
    //this.sqliteService.saveMyIngredients();
  }

  ionViewWillEnter() {
  }
}