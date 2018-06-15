import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeDeCoursesPage } from './liste-de-courses';

@NgModule({
  declarations: [
    ListeDeCoursesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListeDeCoursesPage),
  ],
})
export class ListeDeCoursesPageModule {}
