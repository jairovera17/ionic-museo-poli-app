import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { JuegoPage } from '../juego/juego';
import { ListMasterPage } from '../list-master/list-master';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ListMasterPage;
  tab3Root = JuegoPage;
  tab4Root = AboutPage

  constructor() {

  }
}
