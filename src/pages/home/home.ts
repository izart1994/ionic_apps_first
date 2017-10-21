import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddReminderPage } from '../add-reminder/add-reminder';
import { AngularFire } from 'angularfire2';
import { Reminder } from '../../classes/reminder';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shouldShowEmptyState = true;

  reminderList: Reminder[] = [];

  constructor(public navCtrl: NavController,
              public af: AngularFire) {

  }

  ionViewDidLoad() {
    let reminderList = this.af.database.list("/reminders");

    reminderList.subscribe(data => {

      this.reminderList = [];
      
      data.forEach((item) => {

        let reminder: Reminder = Object.assign(new Reminder(), item);
        reminder.key = item.$key;
        this.reminderList.push(reminder);

      })


    });




  }

  navigateToReminder() {
    this.navCtrl.push(AddReminderPage);

  }

}
