import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserStatsComponent } from './user-stats/user-stats.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserMainComponent } from './user-main/user-main.component';


@NgModule({
  declarations: [UserStatsComponent, UserProfileComponent, UserMainComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
