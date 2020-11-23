import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TeamSectionComponent } from './team-section/team-section.component';
import { UpdateUserComponent } from './update-user/update-user.component';



const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'team', component: TeamSectionComponent},
  {path: 'update/:id', component: UpdateUserComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
