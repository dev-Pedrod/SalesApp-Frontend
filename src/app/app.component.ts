import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Nav, Platform } from 'ionic-angular';
import { API_CONFIG } from '../config/api.config';
import { ClienteDTO } from '../models/cliente.dto';
import { ProfilePage } from '../pages/profile/profile';
import { AuthService } from '../services/auth.service';
import { ClienteService } from '../services/domain/cliente.service';
import { StorageService } from '../services/storage.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'HomePage';

  pages: Array<{title: string, component: string}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public auth: AuthService
    ){

    this.pages = [
      { title: 'Profile', component: 'ProfilePage' },
      { title: 'Categorias', component: 'CategoriasPage' },
      { title: 'Carrinho', component: 'CartPage'},
      { title: 'Logout', component: ''}
    ];

  }
  initializeApp() {

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    
  }

  openPage(page : {title:string, component:string}) {
    switch (page.title) {
      case 'Logout':
      this.auth.logout();
      this.nav.setRoot('HomePage');
      break;

      default:
      this.nav.setRoot(page.component);
    }
  }
}
