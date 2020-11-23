import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { TeamSectionComponent } from './team-section/team-section.component';
import { PhilosophyComponent } from './philosophy/philosophy.component';
import { SocialComponent } from './social/social.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { UpdateUserComponent } from './update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavigationComponent,
    ImageSliderComponent,
    JumbotronComponent,
    TeamSectionComponent,
    PhilosophyComponent,
    SocialComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
