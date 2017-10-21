import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddReminderPage } from '../pages/add-reminder/add-reminder';
import { AngularFireModule } from 'angularfire2';
import { ProgressBarComponent } from "../components/progress-bar/progress-bar";

export const firebaseConfig = {
    apiKey: "AIzaSyD55_io_TtK_rqLQ9Nqft9FilKrWAnVpHM",
    authDomain: "perkimapps.firebaseapp.com",
    databaseURL: "https://perkimapps.firebaseio.com",
    projectId: "perkimapps",
    storageBucket: "perkimapps.appspot.com",
    messagingSenderId: "906709346801"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddReminderPage,
    ProgressBarComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddReminderPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
