import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { QuestionarioPage} from '../questionario/questionario';
import { ListMasterPage } from '../list-master/list-master';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = QuestionarioPage;
  tab4Root = ListMasterPage

  constructor() {

  }
}
