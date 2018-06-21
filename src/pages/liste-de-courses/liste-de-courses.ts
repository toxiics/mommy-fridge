import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the ListeDeCoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liste-de-courses',
  templateUrl: 'liste-de-courses.html',
})
export class ListeDeCoursesPage {
  public listeCourses;
  public newItem= "";
  public displayAdd = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.listeCourses = [
      {title: 'Champignons', checked: false},
      {title: 'Tomates', checked: true},
      {title: 'Lait', checked: false}
    ];
  }

  addItem(newItem){
    if (newItem === "") {
      return false
    } else {
      this.listeCourses.push({title:newItem, checked: false})
      this.newItem = ""
    }
  }

  removeItem(item){
    let index = this.listeCourses.indexOf(item)
    this.listeCourses.splice(index, 1)
  }

  updateList(item){
    let index = this.listeCourses.indexOf(item)
    this.listeCourses[index] = item
  }

}
