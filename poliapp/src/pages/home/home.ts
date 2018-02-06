import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestionarioPage } from '../questionario/questionario';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  change(){
    this.navCtrl.setRoot(QuestionarioPage);
  }


  

}

