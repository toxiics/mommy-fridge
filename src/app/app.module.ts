import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { FrigoPage } from '../pages/frigo/frigo';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListeDeCoursesPage } from '../pages/liste-de-courses/liste-de-courses';
import { PlanificationPage } from '../pages/planification/planification';
import { RecettesPage } from '../pages/recettes/recettes';
import {SQLite} from '@ionic-native/sqlite';
import {SqliteProvider} from '../providers/sqlite/sqlite';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    MyApp,
    FrigoPage,
    ListeDeCoursesPage,
    PlanificationPage,
    RecettesPage
  ],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FrigoPage,
    ListeDeCoursesPage,
    PlanificationPage,
    RecettesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    SqliteProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
