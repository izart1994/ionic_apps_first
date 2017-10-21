import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})

export class AboutPage {

  // please add this line as default generated page plus the --ts option on command line.
  // private nav:NavController = null;

  constructor(public navCtrl: NavController) {
     
  }

}