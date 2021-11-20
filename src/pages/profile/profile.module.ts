import { NgModule } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';

@NgModule({
  declarations: [
    ProfilePage,
  ],
  providers:[
    Camera
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
  ],
})
export class ProfilePageModule {}