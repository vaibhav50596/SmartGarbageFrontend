import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserMainComponent } from './user-main/user-main.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserStatsComponent } from './user-stats/user-stats.component';


const routes: Routes = [
  { path: '', component: UserMainComponent },
  { path: 'profile', 
    component: UserProfileComponent, 
  },
  {
    path: 'user-stats',
    component: UserStatsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
