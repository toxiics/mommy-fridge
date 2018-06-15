import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FrigoPage } from '../pages/frigo/frigo';
import { ListeDeCoursesPage } from '../pages/liste-de-courses/liste-de-courses';
import { RecettesPage } from '../pages/recettes/recettes';
import { PlanificationPage } from '../pages/planification/planification';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = FrigoPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Frigo', component: FrigoPage },
      { title: 'Liste de courses', component: ListeDeCoursesPage },
      { title: 'Planification', component: PlanificationPage },
      { title: 'Recettes', component: RecettesPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
